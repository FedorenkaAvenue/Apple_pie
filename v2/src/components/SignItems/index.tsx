import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { GoogleLogin } from 'react-google-login';

import css from './index.module.sass';
import Link from '@components/common/Link';
import Button from '@components/common/Button';

export default function SignItems() {
    const { asPath } = useRouter();

    const googleRes = useCallback(response => {
        console.log(response);
    }, []);

    return (
        <div className={css.index}>
            <Button title="facebook" />
            <GoogleLogin
                clientId={process.env.GOOGLE_OAUTH_ID}
                render={({ onClick, disabled }) => (
                    <Button title="google" handleClick={onClick} disable={disabled} />
                )}
                onSuccess={googleRes}
                onFailure={googleRes}
                cookiePolicy={'single_host_origin'}
            />
            <Link title="email" href={asPath + '/email'} isButton />
        </div>
    );
}
