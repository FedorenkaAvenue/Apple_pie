import { SagaIterator } from 'redux-saga';
import { call, put } from "redux-saga/effects";

import { fetchSaga } from './common';
import { setProfile } from '@actions/profile';

export function* loadProfileSaga(): SagaIterator {
    try {
        const res = yield call(fetchSaga, '/api/user/profile');

        yield put(setProfile(res));
    } catch(err) {
        console.log(err);
    }
}
