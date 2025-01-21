import Head from 'next/head';

import { useRouter } from 'next/router';
import { routes, images } from '@utils/constants';
import { ReduxStates } from '@redux/store';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import Link from 'next/link';
import { fetchGetCurrentAccount, fetchLogout } from '@redux/actions/api';
import { useEffect, useState } from 'react';
import { authHelper } from '@utils/helpers';
import Img from '@components/commons/Img';
import Button from '@components/commons/Button';

const Header: IHeaderComponent<IHeaderComponentProps> = (props) => {
    const { isShow } = props;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const account = useAppSelector((states: ReduxStates) => states.account);
    const token = authHelper.accessToken();
    const [state, setState] = useState<IHeaderComponentState>({
        isActive: routes.CLIENT.EXPLORE.href,
    });
    const {} = state;

    const listMenuData = [
        {
            title: 'Home',
            href: routes.CLIENT.HOME.href,
            class: 'position-relative hover-link',
        },
        {
            title: 'Explore',
            href: routes.CLIENT.EXPLORE.href,
            class: 'position-relative hover-link',
        },
        {
            title: 'Rooms',
            href:  routes.CLIENT.ROOMS.href,
            class: 'position-relative hover-link',
        },
        {
            title: 'About',
            href: '#',
            class: 'position-relative hover-link',
        },
        {
            title: 'Contact',
            href: '#',
            class: 'position-relative hover-link',
        },
    ];

    const dropDownHover = [
        {
            title: 'Profile',
            href: '#',
            class: 'position-relative hover-link',
        },
        {
            title: 'Logout',
            onclick: () => {
                handleLogout();
            },
            class: 'position-relative hover-link',
        },
    ];

    useEffect(() => {
        if (authHelper.isAuth()) {
            const memberProfile = async () => {
                dispatch(await fetchGetCurrentAccount());
            };
            memberProfile();
        }
    }, [dispatch, authHelper.isAuth()]);

    const handleLogout = () => {
        dispatch(fetchLogout());
        router.push(routes.CLIENT.LOGIN.href, undefined, { scroll: false });
    };

    if (isShow) {
        return (
            <>
                <Head>
                    <title>Booking Hotel</title>
                    <link rel="icon" type="image/png" href="/favicon.ico" />
                </Head>
                <div className="components__header container-fluid d-flex align-items-center justify-content-around">
                    <div>
                        <Img src={images.LOGO} onClick={() => {}} />
                    </div>
                    <div>
                        <ul className="d-flex flex-row align-items-center justify-content-center gap-5">
                            {listMenuData?.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className={`${item.class} ${router.pathname === item.href ? 'active' : ''}`}
                                        href={item.href ?? '#'}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                {token ? (
                                    <>
                                        <div className="components__header--setting">
                                            <div className="components__header--setting--container d-flex align-items-center gap-2 bases__p--cursor">
                                                <p className="m-0 p-0">{account.username ? account.username : account.email}</p>
                                                <Img src={images.ICON_USER} />
                                            </div>
                                            <ul className="components__header--setting--user">
                                                {dropDownHover.map((item, index) => (
                                                    <li key={index} onClick={item.onclick}>
                                                        <Link className={`m-0 p-0 hover-link ${item.class}`} href={item.href ?? ''}>
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <Button
                                        className="bases__button--primary bases__border--black bases__font--16 bases__padding--10 bases__radius10px bases__width--120"
                                        onClick={() => {
                                            router.push(routes.CLIENT.LOGIN.href, undefined, { scroll: false });
                                        }}
                                        buttonText="Login"
                                        background="white"
                                        textColor="black"
                                    />
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
};

export default Header;
