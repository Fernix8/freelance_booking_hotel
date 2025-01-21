const HOME_PAGE: IRouteConstant = {
    href: '/',
};
const LOGIN_PAGE: IRouteConstant = {
    href: '/auth/login',
};
const REGISTER_PAGE: IRouteConstant = {
    href: '/auth/register',
};
const EXPLORE_PAGE: IRouteConstant = {
    href: '/user/explore',
};
const NOT_FOUND_PAGE: IRouteConstant = {
    href: '/404',
};

const ROOMS_PAGE: IRouteConstant = {
    href: '/rooms',
};

export const CLIENT = {
    HOME: HOME_PAGE,
    LOGIN: LOGIN_PAGE,
    REGISTER: REGISTER_PAGE,
    EXPLORE: EXPLORE_PAGE,
    NOT_FOUND: NOT_FOUND_PAGE,
    ROOMS: ROOMS_PAGE,
};

const LOGIN_GOOGLE_API: IRouteConstant = {
    href: 'login-success',
};
const PROFILE_API: IRouteConstant = {
    href: 'user/profile',
};
const AUTH_API: IRouteConstant = {
    href: 'user/auth',
};
export const API = {
    LOGIN_GOOGLE: LOGIN_GOOGLE_API,
    PROFILE: PROFILE_API,
    AUTH: AUTH_API,
};
