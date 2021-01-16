import fetch from 'node-fetch';

type ICustomPayload = {
    facebookName: string
    email: string
    photo: string
}

export default async function(token: string): Promise<ICustomPayload> {
    const res = await fetch(`https://graph.facebook.com/v2.3/me?access_token=${token}&method=get&&fields=name%2Cemail%2Cpicture&pretty=0&sdk=joey&suppress_http_code=1`);
    const { name: facebookName, email, picture: { data: { url: photo } } } =  await res.json();

    return { facebookName, email, photo };
}
