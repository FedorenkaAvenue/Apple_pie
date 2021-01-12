import css from './index.module.sass';
import { IProps } from './interface';

export default function InputText({ val, handleChange, placeholder }: IProps) {
    return (
        <label className={css.index}>
            <input
                onChange={handleChange}
                value={val}
                placeholder={placeholder}
            />
        </label>
    );
}
