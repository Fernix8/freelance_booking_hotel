import Router from 'next/router';
import { SET_DISMISS_MODAL, SET_LOCALE, SET_MODAL } from '@redux/actions/type';

// Action set active locale
export const setLocale = (data: string = 'kr') => {
    Router.push(
        {
            pathname: Router.pathname,
            query: Router.query,
        },
        Router.asPath,
        { locale: data, scroll: false },
    );

    return {
        type: SET_LOCALE,
        data,
    };
};

export const setModal = (data: IModalReduxData = { isShow: false }) => {
    return {
        type: SET_MODAL,
        data,
    };
};
export const dismissModal = (data: IDissmissModalReduxData = { hasDismissedModal: false }) => {
    return {
        type: SET_DISMISS_MODAL,
        data,
    };
};
