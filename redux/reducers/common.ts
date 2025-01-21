import { SET_DISMISS_MODAL, SET_LOCALE, SET_MODAL } from '@redux/actions/type';

const localeReducer = (state: string = 'kr', action: ILocaleReduxAction) => {
    switch (action.type) {
        case SET_LOCALE:
            return action.data;
        default:
            return state;
    }
};

const modalReducer = (state: IModalReduxData = { isShow: false }, action: IModalReduxAction) => {
    switch (action.type) {
        case SET_MODAL:
            return action.data;
        default:
            return state;
    }
};

const dissmissModalReducer = (state: IDissmissModalReduxData = { hasDismissedModal: false }, action: IDismissModalReduxAction) => {
    switch (action.type) {
        case SET_DISMISS_MODAL:
            return {
                ...state,
                hasDismissedModal: true,
            };
        default:
            return state;
    }
};

export { localeReducer, modalReducer, dissmissModalReducer };
