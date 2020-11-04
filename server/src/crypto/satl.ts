// or use bcriptjs
import { createHmac, createHash } from 'crypto';

export function getSaltedPassword(password: string, id: string): HashAlgorithmIdentifier {
    const salt = createHmac('sha256', id).digest('base64');

    return createHash('sha256').update(password + salt).digest('base64');
}
