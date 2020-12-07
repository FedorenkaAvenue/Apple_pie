import { randomBytes } from 'crypto';

export default function(bytes: number = 16): string {
    return randomBytes(bytes).toString('hex');
}
