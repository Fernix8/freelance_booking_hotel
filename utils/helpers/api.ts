import { appConfig } from '@utils/configs';
import { routes } from '@utils/constants';
import { axios } from '@utils/plugins';

const checkAccessTokenAndParams = (data: IAccessTokenAndParams) => {
    const { token, params } = data;

    if (!params && token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    }

    if (params && token) {
        return {
            params,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    }

    if (params && !token) {
        return {
            params,
        };
    }

    if (!params && !token) {
        return;
    }
};

export const loginGoogle = async (data: ILoginDataAPI) => {
    try {
        return await axios.post<ILoginAPIRes>(`${routes.API.LOGIN_GOOGLE.href}`, data);
    } catch (err) {
        throw err;
    }
};

export const login = async (data: ILoginDataAPI) => {
    try {
        return await axios.post<ILoginAPIRes>(`${routes.API.AUTH.href}/login`, data);
    } catch (err) {
        throw err;
    }
};

export const getProfile = async () => {
    try {
        return await axios.get<IProfileApiRes>(`${routes.API.PROFILE.href}`);
    } catch (err) {
        throw err;
    }
};
