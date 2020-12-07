import fetch, { RequestInfo } from 'node-fetch';

const { AUTH_SERVER_DOMAIN } = process.env;
const POST_REQUEST_BODY = {
    method: 'POST',
    headers: { "Content-Type": "application/json" }
};

export async function getPairToken(id: string, role: number) {
    try {
        const res = await fetch(`${AUTH_SERVER_DOMAIN}/api/auth/token_pair` as RequestInfo, {
            ...POST_REQUEST_BODY,
            body: JSON.stringify({ id, role })
        });
        const tokenPair = await res.json();

        return tokenPair;
    } catch(err) {
        throw new Error(err);
    }
}
