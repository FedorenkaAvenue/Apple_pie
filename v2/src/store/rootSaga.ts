import { all, takeLatest } from 'redux-saga/effects';

import { signUpEmailSaga } from './saga/sign';
// import { loadProfileSaga } from './saga/profile';
import { SIGN_ACTION, PROFILE_ACTION } from '@constants/actionTypes';

export default function* rootSaga() {
    yield all([
        takeLatest(SIGN_ACTION.SIGN_UP_EMAIL, signUpEmailSaga),
        // takeLatest(PROFILE_ACTION.LOAD_PROFILE_SAGA, loadProfileSaga)
    ]);
}

// export const authSagaMiddleWare = (next: any) => async (effect: Effect) => {
//     if (effect.type !== 'CALL') return next(effect);

//     const res = await effect.payload.fn();
//     console.log(res);
//     Promise.resolve().then(() => next('injected value'));
//     return
// };
