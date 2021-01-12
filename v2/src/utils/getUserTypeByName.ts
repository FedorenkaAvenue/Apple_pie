import UserTypes from '@constants/userTypes';

export default function(userType: string): number {
    switch(userType) {
        case 'customer':
            return UserTypes.CUSTOMER_TYPE;
        case 'artist':
            return UserTypes.ARTIST_TYPE;
        default:
            throw new Error('unknow user type');
    }
}
