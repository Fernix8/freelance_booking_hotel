import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';

import { authHelper, apiHelper } from '@utils/helpers';

import { SET_ACCOUNT, SET_LOADER } from '@redux/actions/type';

const setLoader = (data: boolean = false) => {
    return {
        type: SET_LOADER,
        data,
    };
};

const setAccount = (data: IUserAPIData) => {
    return {
        type: SET_ACCOUNT,
        data,
    };
};
export const fetchLogout = () => {
    authHelper.logOut();
    return {
        type: SET_ACCOUNT,
        data: { account: null },
    };
};

export const fetchLoginGoogle = async (
    data: ILoginDataAPI,
    callBack?: (result: ILoginAPIRes | IErrorAPIRes | null) => void,
    isLoad: boolean = true,
) => {
    return async (dispatch: Dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }

        try {
            const res = await apiHelper.loginGoogle(data);
            if (res?.data?.result) {
                authHelper.setAccessToken(res.data.result?.accessToken ?? '');
            }
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err as AxiosResponse<IErrorAPIRes, AxiosError>;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }

        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchLogin = async (
    data: ILoginDataAPI,
    callBack?: (result: ILoginAPIRes | IErrorAPIRes | null) => void,
    isLoad: boolean = true,
) => {
    return async (dispatch: Dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }

        const res = await apiHelper.login(data);
        if (res?.data) {
            authHelper.setAccessToken(res.data.result?.accessToken ?? '');
        }
        if (callBack) {
            callBack(res?.data ?? res);
        }

        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchGetCurrentAccount = async (callBack?: (result: IProfileApiRes | IErrorAPIRes | null) => void, isLoad: boolean = true) => {
    return async (dispatch: Dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }

        const res = await apiHelper.getProfile();
        dispatch(setAccount(res?.data?.result ?? {}));

        if (callBack) {
            callBack(res?.data ?? res);
        }

        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};
