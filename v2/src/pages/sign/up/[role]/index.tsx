import { useCallback } from 'react';
import { useRouter } from 'next/router';

import css from './index.module.sass';
import SignItems from '@containers/SignItems';

export default function SignUpRole() {
    const router = useRouter();

    const signUpGoogle = useCallback(async res => {
        console.log(res);
        const result = await fetch('/api/sign/up/google', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ credentials: res.tokenId, role: 1 })
        });

    }, []);

    const signUpFacebook = useCallback((res) => {
        console.log(res);
    }, []);

    return (
        <div className={css.index}>
            <SignItems
                googleHandler={signUpGoogle}
                facebookHandler={signUpFacebook}
            />
        </div>
    );
}
