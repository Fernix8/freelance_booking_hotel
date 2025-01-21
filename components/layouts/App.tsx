import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Loader from '@components/layouts/Loader';
import Modal from '@components/layouts/Modal';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';

import { fetchGetCurrentAccount, setLocale, setModal } from '@redux/actions';
import { authHelper } from '@utils/helpers';
import { http, routes } from '@utils/constants';
import { useAppDispatch } from '@utils/hooks';

const App: IAppComponent<IAppComponentProps> = (props) => {
    const { children, statusCode } = props;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [state, setState] = useState<IAppComponentState>({
        reloadKey: 0,
        historyPathname: router.pathname,
    });
    const { reloadKey } = state;
    const token = authHelper.accessToken();
    const { locale, pathname } = router;
    const noAuthPath = [
        // bắt phân quyền admin
        routes.CLIENT.LOGIN.href,
    ];
    const isNotFoundPage = statusCode === http.NOT_FOUND_CODE;

    const isShowComponent = !noAuthPath.includes(pathname) && !isNotFoundPage;

    const noHeaderFooterPath = [routes.CLIENT.LOGIN.href];

    useEffect(() => {
        const checkAuth = async () => {
            if (token && (router.pathname === routes.CLIENT.LOGIN.href || router.pathname === routes.CLIENT.REGISTER.href)) {
                await router.replace(routes.CLIENT.HOME.href, undefined, { scroll: false });
            }
        };
        checkAuth();
    }, [token, router]);

    useEffect(() => {
        window.addEventListener('popstate', onBackButtonEvent);

        return () => {
            window.removeEventListener('popstate', onBackButtonEvent);
        };
    }, []);

    useEffect(() => {
        handleScrollToTop();
        setState((prevState) => ({
            ...prevState,
            historyPathname: pathname,
        }));
        if (authHelper.isAuth()) {
            handleFetchAccount();
        }
    }, [pathname]);

    useEffect(() => {
        dispatch(setLocale(locale));
    }, [locale]);

    const onBackButtonEvent = () => {
        dispatch(setModal({ isShow: false }));
        handleScrollToTop();
    };

    const handleFetchAccount = async () => {
        dispatch(await fetchGetCurrentAccount(() => {}, false));
    };

    const handleScrollToTop = () => {
        document.documentElement.style.scrollBehavior = 'auto';
        setTimeout(() => window.scrollTo(0, 0), 5);
    };

    return (
        <div key={reloadKey} className="components__app">
            <Loader />
            <Modal />
            <Header isShow={isShowComponent && !noHeaderFooterPath.includes(router.pathname)} />
            <div className="components__app-content bases__padding--top80">{children}</div>
            <Footer isShow={isShowComponent && !noHeaderFooterPath.includes(router.pathname)} />
        </div>
    );
};

export default App;
