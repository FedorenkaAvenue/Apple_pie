export enum SIGN_ACTION {
    SIGN_UP_EMAIL = 'sign/up/email',
    SIGN_UP_SOCIAL = 'sign/up/social',
    SIGN_IN_EMAIL = 'sign/in/email',
    SIGN_IN_SOCIAL = 'sign/in/social',
    SIGN_OUT = 'sign/out'
}

export enum USER_ACTION {
    SET_USER_DATA = 'set/user_data',
    SET_ACCESS_TOKEN = 'set/user_token',
    USER_IS_FETCHING = 'is/fetching'
}

export enum PROFILE_ACTION {
    LOAD_PROFILE_SAGA = 'SAGA:load/profile',
    SET_PROFILE_DATA = 'set/profile_data'
}
