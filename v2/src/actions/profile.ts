import { PROFILE_ACTION } from '@constants/actionTypes';
import { IProfile } from '@interfaces/Profile';

export const loadProfile = () => ({ type: PROFILE_ACTION.LOAD_PROFILE_SAGA });

export const setProfile = (profileData: IProfile) => ({
    type: PROFILE_ACTION.SET_PROFILE_DATA,
    payload: profileData
});
