import { USER_ACTION } from '@constants/actionTypes';
import { IUser } from '@interfaces/User';
import { IAction } from '@interfaces/common';

export const setUserData = (userData: Partial<IUser>): IAction<Partial<IUser>> => ({
    type: USER_ACTION.SET_USER_DATA,
    payload: userData
});

export const setAccessToken = (accessToken: string): IAction<string> => ({
    type: USER_ACTION.SET_ACCESS_TOKEN,
    payload: accessToken
});

export const userIsFetching = (bool: boolean): IAction<boolean> => ({
    type: USER_ACTION.USER_IS_FETCHING,
    payload: bool
});
