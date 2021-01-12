import css from './index.module.sass';
import Link from '@components/common/Link';

export default function SignUp() {
    return (
        <div className={css.index}>
            <h1>Sign Up as</h1>
            <div className={css.roles}>
                <Link href="/sign/up/customer" title="customer" isButton />
                <Link href="/sign/up/artist" title="tattoo artist" isButton />
            </div>
            <Link href="/sign/in" title="already have an account?" />
        </div>
    );
}
