import { config } from 'dotenv';

const { IS_DEV } = process.env;

export default function(): void {
    config({ path: IS_DEV ? './.dev.env' : './.env' });
}
