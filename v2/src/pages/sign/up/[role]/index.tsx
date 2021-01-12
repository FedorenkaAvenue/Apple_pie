import { useRouter } from 'next/router';

import css from './index.module.sass';
import SignItems from '@components/SignItems';

export default function SignUpRole() {
    const router = useRouter();

    return (
        <div className={css.index}>
            <SignItems />
        </div>
    );
}
