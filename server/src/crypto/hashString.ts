import { createHash } from 'crypto';

export default function(string: string): string {
    return createHash('md5').update(string).digest('hex');
}
