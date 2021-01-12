import Link from 'next/link';

import css from './index.module.sass';
import { IProps } from './interface';

export default function LinkButton({ href, title, isButton }: IProps) {
    return (
        <Link href={href}>
            <a className={`${css.index} ${ isButton && css.button}`}>
                {title}
            </a>
        </Link>
    );
}
