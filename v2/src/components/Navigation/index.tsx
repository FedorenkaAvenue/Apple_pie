import Link from 'next/link';

import css from './index.module.sass';
import { CircleButton, TriangleButton, SquareButton, CrossButton, TriangleReverseButton } from '@components/common/svgIcons';

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <ul>
                <li><Link href="/my-appl"><a>
                    <SquareButton title="my appls" />
                </a></Link></li>
                <li><Link href="/my-sketch"><a>
                    <TriangleButton title="хз" />
                </a></Link></li>
                <li><Link href="/applications"><a>
                    <CircleButton title="applications" />
                </a></Link></li>
                <li><Link href="/sketches"><a>
                    <TriangleReverseButton title="sketches" />
                </a></Link></li>
                <li><Link href="/profile"><a>
                    <CrossButton title="profile" />
                </a></Link></li>
            </ul>
        </nav>
    )
}
