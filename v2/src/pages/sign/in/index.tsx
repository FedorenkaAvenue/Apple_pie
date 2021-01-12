import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import css from './index.module.sass';
import SignItems from '@components/SignItems';
import Link from '@components/common/Link';
import { USER_SELECTOR } from '@store/selectors';

export default function SignIn() {
    const { isAuth } = useSelector(USER_SELECTOR);
    const router = useRouter();

    if (isAuth) {
        router.push('/');
        return null;
    }

    return (
        <div className={css.index}>
            <h1>Sign In</h1>
            <SignItems />
            <Link href="/sign/up" title="steel don't have an account?" />
        </div>
    );
}
