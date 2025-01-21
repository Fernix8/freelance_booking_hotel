interface ILoginDataAPI {
    email?: string;
    password?: string;
}

interface ILoginAPIRes extends IBaseAPIRes {
    result: {
        accessToken?: string;
    };
}

interface IGetProfileAPIRes extends IBaseAPIRes {
    data: {
        profile: IUserAPIData;
    };
}
