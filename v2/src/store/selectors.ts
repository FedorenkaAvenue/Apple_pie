import IState from '@interfaces/State';

// users
export const USER_SELECTOR = (state: IState) => state.user;
export const ACCESS_TOKEN_SELECTOR = (state: IState) => state.user.accessToken;

//profile
export const PROFILE_SELECTOR = (state: IState) => state.profile;
