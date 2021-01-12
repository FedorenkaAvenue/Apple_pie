import { HYDRATE } from 'next-redux-wrapper';

import initialState from './initialState';
import { USER_ACTION } from '@constants/actionTypes';
import { IUser } from '@interfaces/User';

export default function userReducer(state = initialState, { type, payload }): IUser {
    switch(type) {
        case HYDRATE:
            return { ...payload.user };
        case USER_ACTION.SET_USER_DATA:
            return { ...state, ...payload };
        case USER_ACTION.SET_ACCESS_TOKEN:
            return { ...state, accessToken: payload };
        case USER_ACTION.USER_IS_FETCHING:
            return { ...state, isFetching: payload };
        default:
            return state;
    }
}
