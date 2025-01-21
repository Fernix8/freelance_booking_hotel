interface IUserAPIData {
    _id?: string;
    username?: string;
    email?: string;
    images?: string;
    dob?: string;
    gender?: 'Male' | 'Female' | 'Other';
    phone?: string;
    password?: string;
    role?: string;
    address?: string;
    isBlocked?: boolean;
    refreshToken?: string;
    typeLogin?: 'GOOGLE' | 'NORMAL';
    createdAt?: string;
    updatedAt?: string;
}

interface IProfileApiRes {
    result?: IUserAPIData;
}
