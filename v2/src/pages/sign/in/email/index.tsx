import { useCallback, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import css from './index.module.sass';
import TextInput from '@components/common/InputText';
import Button from '@components/common/Button';
// import {  } from '@actions/sign';

export default function SignUpEmail() {
    const dispatch = useDispatch();

    const sign = useCallback(async (e: FormEvent) => {
        e.preventDefault();

        const res =  await fetch('/api/sign/in', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: 'bringmetheaugust@gmail.com',
                password: '9321932slk'
            })
        });

        // return await res.json();
    }, []);

    return (
        <div className={css.index}>
            {/* <form onSubmit={sign}> */}
                {/* <TextInput />
                <TextInput /> */}
                <Button title="sign" />
            {/* </form> */}
        </div>
    );
}
