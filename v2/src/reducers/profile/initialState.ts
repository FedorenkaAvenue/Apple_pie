import { IProfile } from '@interfaces/Profile';

const initialState: IProfile = {
    id: null,
    role: null,
    name: null,
    created_at: null,
    verify: null,
    applications: null,
    sketches: null,
    isFetching: false
};

export default initialState;
