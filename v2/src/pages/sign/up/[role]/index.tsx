import { useCallback } from 'react';
import { useRouter } from 'next/router';

import css from './index.module.sass';
import SignItems from '@containers/SignItems';

export default function SignUpRole() {
    const router = useRouter();

    const signUpGoogle = useCallback(res => {
        console.log(res);
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
