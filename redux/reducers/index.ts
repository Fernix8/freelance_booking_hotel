import { combineReducers } from 'redux';
import { dissmissModalReducer, localeReducer, modalReducer } from './common';
import { loaderReducer, accountReducer } from './api';

const rootReducers = combineReducers({
    account: accountReducer,
    locale: localeReducer,
    modal: modalReducer,
    loader: loaderReducer,
    dissmissModal: dissmissModalReducer,
});
export default rootReducers;
