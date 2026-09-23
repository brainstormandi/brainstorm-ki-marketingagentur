interface Store {
    [key: string]: {
        count: number;
        lastReset: number;
    }
}

const store: Store = {};

/**
 * Simple in-memory rate limiter.
 * Note: Reset is per-instance, not per-user across serverless instances.
 * But for 3 mails/min, it serves as a basic protector.
 */
export function rateLimit(ip: string, limit: number = 3, windowMs: number = 60000): boolean {
    const now = Date.now();
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
 * Simple HTML Escaper to prevent XSS in emails.
 */
export function sanitize(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * Validates email structure.
 */
export function isValidEmail(email: string): boolean {
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
    /viagra|cialis|levitra/i,
    /casino|poker|betting|slot-machine/i,
    /crypto|bitcoin|forex-trading|binance/i,
    /porn|adult-dating|escort/i,
    /t\.me\/|telegram\.me|wa\.me\//i,
    /[\u0400-\u04FF]{4,}/ // 4+ consecutive Cyrillic characters (common in automated spam bot runs)
];

export function isSpamContent(text: string): boolean {
    if (!text) return false;
    return SPAM_PATTERNS.some((pattern) => pattern.test(text));
}

/**
 * Checks honeypot field. If filled, submission was by an automated bot.
 */
export function isHoneypotTriggered(honeypot?: string): boolean {
    return !!honeypot && honeypot.trim().length > 0;
}

/**
 * Validates that submission wasn't impossibly fast (bots submit in < 1.5s)
 * or unrealistically old (> 24 hours).
 */
export function isTimingValid(timestamp?: number, minSeconds = 1.5): boolean {
    if (!timestamp || typeof timestamp !== 'number') return false;
    const now = Date.now();
    const elapsedSeconds = (now - timestamp) / 1000;
    
    // Too fast (< 1.5s) = bot
    if (elapsedSeconds < minSeconds) return false;
    // Older than 24h = stale session
    if (elapsedSeconds > 86400) return false;
    
    return true;
}
