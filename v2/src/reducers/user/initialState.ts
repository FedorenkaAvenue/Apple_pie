import { IUser } from '@interfaces/User';

const initialState: IUser = {
    isAuth: false,
    accessToken: null,
    isFetching: false
};

export default initialState;
