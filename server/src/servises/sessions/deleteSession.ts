
import { DELETE_SESSION } from '@db/redis/queries/sessions';

export default async function(sessionKey: string): Promise<void> {
    try {
        DELETE_SESSION(sessionKey);
    } catch(err) {
        throw new Error(err);
    }
}
