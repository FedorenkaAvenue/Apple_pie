import fetch, { RequestInfo } from 'node-fetch';

import { ITokenPair } from '@interfaces/IToken';

type IAuthSignUp = {
    id: string
    role: number
    ip: string
    ua: string
};

const { AUTH_SERVER_DOMAIN } = process.env;

export default async function({ id, role, ip, ua }: IAuthSignUp): Promise<ITokenPair> {
    try {
        const res = await fetch(`${AUTH_SERVER_DOMAIN}/api/auth/signup` as RequestInfo, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, role, ip, ua })
        });

        if (!res.ok) throw new Error(String(res.status));

        const tokenPair = await res.json();

        return tokenPair;
    } catch(err) {
        throw new Error();
    }
}
