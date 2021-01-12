import css from './index.module.sass';
import { IProps } from './interface';

export default function Button({ handleClick, title, disable = false }: IProps) {
    return (
        <button
            onClick={handleClick || null}
            className={css.index}
            disabled={disable}
        >
            {title}
        </button>
    );
}
