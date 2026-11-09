interface Store {
    [key: string]: {
        count: number;
        lastReset: number;
    }
}

const store: Store = {};
const MAX_STORE_ENTRIES = 5000;

/**
 * Extracts client IP safely from request headers.
 */
export function getClientIp(req: Request): string {
    const forwarded = req.headers.get('x-forwarded-for');
    if (forwarded) {
        const firstIp = forwarded.split(',')[0]?.trim();
        if (firstIp && firstIp.length <= 64) return firstIp;
    }
    const realIp = req.headers.get('x-real-ip')?.trim();
    if (realIp && realIp.length <= 64) return realIp;
    return 'unknown';
}

/**
 * Validates that a POST/GET API request originates from our own domain (CSRF & Cross-Origin Bot Protection).
 */
export function isValidOrigin(req: Request): boolean {
    if (process.env.NODE_ENV === 'development') return true;

    const origin = req.headers.get('origin');
    const referer = req.headers.get('referer');
    const host = req.headers.get('host');

    const allowedHosts = new Set([
        'ki-marketingagentur.jetzt',
        'www.ki-marketingagentur.jetzt',
        'brainstorm-werbeagentur.at',
        'www.brainstorm-werbeagentur.at',
        ...(host ? [host.split(':')[0]] : []),
    ]);

    const checkUrlHost = (urlStr: string | null): boolean => {
        if (!urlStr) return false;
        try {
            const parsed = new URL(urlStr);
            return allowedHosts.has(parsed.hostname.toLowerCase());
        } catch {
            return false;
        }
    };

    if (origin) return checkUrlHost(origin);
    if (referer) return checkUrlHost(referer);

    // Block direct script requests without Origin or Referer in production
    return false;
}

/**
 * In-memory rate limiter with automatic memory cap cleanup to prevent memory exhaustion DoS.
 */
export function rateLimit(ip: string, limit: number = 3, windowMs: number = 60000): boolean {
    const now = Date.now();
    const keys = Object.keys(store);
    if (keys.length > MAX_STORE_ENTRIES) {
        for (const k of keys) {
            if (now - store[k].lastReset > windowMs) {
                delete store[k];
            }
        }
    }

    const existing = store[ip];

    if (!existing) {
        store[ip] = { count: 1, lastReset: now };
        return true;
    }

    if (now - existing.lastReset > windowMs) {
        existing.count = 1;
        existing.lastReset = now;
        return true;
    }

    if (existing.count >= limit) {
        return false;
    }

    existing.count += 1;
    return true;
}

/**
 * Simple HTML Escaper to prevent XSS in emails and templates.
 */
export function sanitize(str: string, maxLength: number = 500): string {
    if (typeof str !== 'string') return '';
    return str
        .slice(0, maxLength)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * Strips CR/LF characters to prevent SMTP Email Header Injection.
 */
export function stripHeaderInjection(str: string, maxLength: number = 200): string {
    if (typeof str !== 'string') return '';
    return str.replace(/[\r\n]+/g, ' ').trim().slice(0, maxLength);
}

/**
 * Validates and normalizes an HTTP/HTTPS URL to prevent javascript: or data: URI injection in emails.
 */
export function sanitizeHttpUrl(rawUrl: string): string | null {
    if (typeof rawUrl !== 'string') return null;
    const trimmed = rawUrl.trim().slice(0, 300);
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    try {
        const parsed = new URL(withProtocol);
        if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
        if (!parsed.hostname.includes('.') || parsed.hostname.length < 4) return null;
        return parsed.toString();
    } catch {
        return null;
    }
}

/**
 * Validates email structure (RFC-compliant length and character check, blocks CRLF).
 */
export function isValidEmail(email: string): boolean {
    if (typeof email !== 'string' || email.length > 254) return false;
    if (/[\r\n]/.test(email)) return false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
}

/**
 * Blocklist of well-known disposable / burner email domains.
 */
const DISPOSABLE_DOMAINS = new Set([
    'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'tempmail.com',
    'temp-mail.org', '10minutemail.com', 'yopmail.com', 'yopmail.fr',
    'sharklasers.com', 'dispostable.com', 'trashmail.com', 'trashmail.net',
    'getairmail.com', 'fakemailgenerator.com', 'crazymailing.com',
    'generator.email', 'emailondeck.com', 'dropmail.me', 'mohmal.com',
    'burnermail.io', 'mytemp.email', 'nada.ltd', 'inboxkitten.com'
]);

export function isDisposableEmail(email: string): boolean {
    const parts = email.toLowerCase().split('@');
    if (parts.length !== 2) return true;
    const domain = parts[1].trim();
    return DISPOSABLE_DOMAINS.has(domain);
}

/**
 * Common spam keywords & patterns found in automated lead bot submissions.
 */
const SPAM_PATTERNS = [
    /\[url=/i,
    /<a\s+/i,
    /href\s*=/i,
    /\[link=/i,
    /javascript:/i,
    /data:text\/html/i,
    /<script/i,
    /viagra|cialis|levitra/i,
    /casino|poker|betting|slot-machine/i,
    /crypto|bitcoin|forex-trading|binance/i,
    /porn|adult-dating|escort/i,
    /t\.me\/|telegram\.me|wa\.me\//i,
    /[\u0400-\u04FF]{4,}/ // 4+ consecutive Cyrillic characters
];

export function isSpamContent(text: string): boolean {
    if (!text) return false;
    return SPAM_PATTERNS.some((pattern) => pattern.test(text));
}

/**
 * Checks honeypot field. If filled, submission was by an automated bot.
 */
export function isHoneypotTriggered(honeypot?: string): boolean {
    return !!honeypot && String(honeypot).trim().length > 0;
}

/**
 * Validates that submission wasn't impossibly fast (bots submit in < 1.5s)
 * or unrealistically old (> 24 hours).
 */
export function isTimingValid(timestamp?: number, minSeconds = 1.5): boolean {
    if (!timestamp || typeof timestamp !== 'number') return false;
    const now = Date.now();
    const elapsedSeconds = (now - timestamp) / 1000;

    if (elapsedSeconds < minSeconds) return false;
    if (elapsedSeconds > 86400) return false;

    return true;
}
