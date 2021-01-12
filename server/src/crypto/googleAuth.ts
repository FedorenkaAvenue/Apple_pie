import { OAuth2Client, TokenPayload } from 'google-auth-library';

const { GOOGLE_OAUTH_ID } = process.env;
const { verifyIdToken } = new OAuth2Client(GOOGLE_OAUTH_ID);

export default async function verifyUser(token: string): Promise<TokenPayload> {
    const ticket = await verifyIdToken({
        idToken: token,
        audience: GOOGLE_OAUTH_ID
    });
    
    return ticket.getPayload() as TokenPayload;
}

// https://oauth2.googleapis.com/tokeninfo?id_token=XYZ123 ? мб понадобиться проверять подленость юзера
