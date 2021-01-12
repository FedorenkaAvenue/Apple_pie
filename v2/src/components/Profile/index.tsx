import { useSelector } from 'react-redux';

import css from './index.module.sass';
import { PROFILE_SELECTOR } from '@store/selectors';
import { IProps } from './interface';

export default function Profile({ isOwn }: IProps) {
    const { name } = useSelector(PROFILE_SELECTOR);

    return (
        <div className={css.index}>
            { isOwn ? 'I am': 'He is' } : {name}
        </div>
    )
}
