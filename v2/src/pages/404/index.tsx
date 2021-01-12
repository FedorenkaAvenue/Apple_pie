import css from './index.module.sass';
import Link from '@components/common/Link';

export default function NotFound() {
    return (
        <div className={css.index}>
            <h1>Page is not found :(</h1>
            <Link href="/" title="go to main" />
        </div>
    );
}
