// import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Profile from '@components/Profile';

export default function MyProfile() {
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    return <Profile isOwn={false} />;
}

// export const getServerSideProps: GetServerSideProps = async () => {
//     const res = await fetch('http://localhost/api/user/profile');

//     if (!res.ok) return {
//         redirect: {
//             destination: '/sign',
//             permanent: false,
//         }
//     }

//     const profile = await res.json();
  
//     return { props: profile };
// }
