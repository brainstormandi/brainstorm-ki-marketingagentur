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
