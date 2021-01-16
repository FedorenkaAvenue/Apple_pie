import { useRouter } from 'next/router';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import css from './index.module.sass';
import Link from '@components/common/Link';
import Button from '@components/common/Button';
import { IProps } from './interface';

export default function SignItems({ googleHandler, facebookHandler }: IProps) {
    const { asPath } = useRouter();

    return (
        <div className={css.index}>
            <GoogleLogin
                clientId={process.env.GOOGLE_OAUTH_ID}
                render={({ onClick, disabled }) => (
                    <Button title="google" handleClick={onClick} disable={disabled} />
                )}
                onSuccess={googleHandler}
                onFailure={googleHandler}
                cookiePolicy={'single_host_origin'}
            />
            <FacebookLogin
                appId={process.env.FACEBOOK_OAUTH_ID}
                callback={facebookHandler}
                fields="name,email,picture"
                render={({ onClick, disabled }) => (
                    <Button title="facebook" handleClick={onClick} disable={disabled} />
                )}
            />
            <Link title="email" href={asPath + '/email'} isButton />
        </div>
    );
}
