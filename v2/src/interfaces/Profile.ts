import { IUserSchema } from './DBSchema';

export interface IProfile extends IUserSchema {
    isFetching: boolean
};
