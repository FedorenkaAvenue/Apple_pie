export enum USER_ACTION {
    SET_USER_DATA = 'user/set/user_data',
    SET_ACCESS_TOKEN = 'user/set/user_token',
    USER_IS_FETCHING = 'user/is_fetching'
}

export enum PROFILE_ACTION {
    LOAD_PROFILE_SAGA = 'SAGA:load/profile',
    SET_PROFILE_DATA = 'profile/set'
}
