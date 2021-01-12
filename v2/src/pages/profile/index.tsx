import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Profile from '@components/Profile';
import { loadProfile } from '@actions/profile';

export default function MyProfile() {
    const dispatch = useDispatch();

    useEffect(() => { dispatch(loadProfile()), []});

    return <Profile isOwn={true} />;
}
