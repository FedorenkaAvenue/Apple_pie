import { useCallback, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import css from './index.module.sass';
import TextInput from '@components/common/InputText';
import Button from '@components/common/Button';
import { signUpEmail } from '@actions/sign';
import getUserTypeByName from '@utils/getUserTypeByName';

type IFormState = {
    email: string
    password: string
}

export default function SignUpEmail() {
    const dispatch = useDispatch();
    const { query } = useRouter();
    const [ form, setForm ] = useState<IFormState>({ email: '', password: '' });

    const sign = useCallback((e: FormEvent) => {
        e.preventDefault();
        
        dispatch(signUpEmail(form.email, form.password, getUserTypeByName(query.role as string)));
    }, [form]);

    return (
        <div className={css.index}>
            <form onSubmit={sign}>
                <TextInput
                    val={form.email}
                    handleChange={({ target }) => setForm({ ...form, email: target.value })}
                    placeholder="email"
                />
                <TextInput
                    val={form.password}
                    handleChange={({ target }) => setForm({ ...form, password: target.value })}
                    placeholder="password"
                />
                <Button title="sign" />
            </form>
        </div>
    );
}
