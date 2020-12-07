// or use bcriptjs
import { createHmac, createHash } from 'crypto';

const SECRET_WORD = 'Vitya';

export function getSaltedPassword(password: string): string {
    const salt = createHmac('sha256', SECRET_WORD).digest('base64');

    return createHash('sha256').update(password + salt).digest('base64');
}
