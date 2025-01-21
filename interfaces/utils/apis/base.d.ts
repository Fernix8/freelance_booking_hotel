interface IBaseAPIRes {
    code?: number;
    message?: string;
}

interface IErrorAPIRes extends IBaseAPIRes {}

interface IAccessTokenAndParams {
    token?: string;
    params?: IListParams;
}
