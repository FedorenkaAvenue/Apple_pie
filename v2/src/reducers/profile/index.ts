import initialState from './initialState';
import { PROFILE_ACTION } from '@constants/actionTypes';
import { IProfile } from '@interfaces/Profile';

export default function profileReducer(state = initialState, { type, payload }): IProfile {
    switch(type) {
        case PROFILE_ACTION.SET_PROFILE_DATA:
            return payload;
        default:
            return state;
    }
}
