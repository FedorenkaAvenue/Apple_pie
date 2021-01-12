import { SagaIterator } from 'redux-saga';
import { call, put } from "redux-saga/effects";

import { userIsFetching, setUserData } from '@actions/user';
import { IAction } from '@interfaces/common';

type ISignInBody = {
    email: string
    password: string
    role: number
};

export function* signUpEmailSaga({ payload }: IAction<ISignInBody>): SagaIterator {
    yield put(userIsFetching(true));

    const { accessToken } = yield call(async () => {
        const res = await fetch('http://localhost/api/sign/up/email', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                role: payload.role
            })
        });

        return await res.json();
    });
    
    yield put(setUserData({ accessToken, isFetching: false, isAuth: true }));
}
