import { OAuth2Client, TokenPayload } from 'google-auth-library';

const { GOOGLE_OAUTH_ID } = process.env;
const clientOAuth = new OAuth2Client(GOOGLE_OAUTH_ID);

type ICustomPayload = TokenPayload & {
    email: string
}

export default async function verifyUser(token: string): Promise<ICustomPayload> {
    const ticket = await clientOAuth.verifyIdToken({
        idToken: token,
        audience: GOOGLE_OAUTH_ID
    });

    return ticket.getPayload() as ICustomPayload;
}

// https://oauth2.googleapis.com/tokeninfo?id_token=XYZ123 ? мб понадобиться дополнительно проверять подленость юзера
