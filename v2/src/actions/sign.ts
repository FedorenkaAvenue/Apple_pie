import { SIGN_ACTION } from '@constants/actionTypes';

export const signUpEmail = (email: string, password: string, role: number) => ({
    type: SIGN_ACTION.SIGN_UP_EMAIL,
    payload: { email, password, role }
});

export const signUpSocial = (token: string, socialType: string) => ({
    type: SIGN_ACTION.SIGN_UP_SOCIAL,
    payload: { token, socialType }
});
