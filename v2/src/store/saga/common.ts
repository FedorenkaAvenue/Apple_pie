import { select, call, put } from "redux-saga/effects";

import { ACCESS_TOKEN_SELECTOR } from '@store/selectors';
import { setUserData } from '@actions/user';

export function* fetchSaga(url: string) {
    const accessToken = yield select(ACCESS_TOKEN_SELECTOR);

    const res = yield call(function* () {
        const res = yield fetch(
            url,
            {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            }
        );

        if (res.status === 401) {
            const res = yield fetch('/api/auth/refresh', { credentials: 'include' });
            const { accessToken } = yield res.json();

            yield put(setUserData({ accessToken, isAuth: true }));
            return yield fetchSaga(url);
        } else {
            const responce = yield res.json();

            return responce;
        }
    });

    return res;
}
