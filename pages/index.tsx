import { useEffect, useState } from 'react';
import { IHomePageProps, IHomePage, IHomePageState } from '@interfaces/pages/home';

import { setModal } from '@redux/actions';
import { useRouter } from 'next/router';
import { authHelper } from '@utils/helpers';
import { Button, Img, Select } from '@components/index';
import { images, routes } from '@utils/constants';
import { useAppDispatch, useAppSelector, useTrans } from '@utils/hooks';
import { ReduxStates } from '@redux/store';

const dataComment = [
    {
        dateTime: '',
        rating: '',
        user: '',
        content: '',
    },
];

const HomePage: IHomePage<IHomePageProps> = () => {
    const [state, setState] = useState<IHomePageState>({});
    const router = useRouter();
    const trans = useTrans();
    const dispatch = useAppDispatch();
    const {} = state;
    const token = authHelper.accessToken();
    const dissmissModal = useAppSelector((states: ReduxStates) => states.dissmissModal);

    useEffect(() => {
        if (!token && !dissmissModal) {
            dispatch(
                setModal({
                    isShow: true,
                    title: 'Login Now?',
                    content: (
                        <div>
                            <p>Do you want to login now?</p>
                        </div>
                    ),
                    button: (
                        <div className="d-flex justify-content-center gap-3">
                            <Button
                                buttonText="Sign In"
                                onClick={() => {
                                    dispatch(
                                        setModal({
                                            isShow: false,
                                        }),
                                    );
                                    router.push(routes.CLIENT.LOGIN.href, undefined, { scroll: false });
                                }}
                            />
                        </div>
                    ),
                    isHideButtonCancle: true,
                }),
            );
        }
    }, []);

    return (
        <div className="pages__home container-fluid">
            <div className="pages__home--content position-relative">
                <div className="d-flex justify-content-around p-4">
                    <div className="pages__home--header col-md-5 d-flex flex-column py-5 bases__gap10px">
                        <p className="m-0 pages__home--header--note">{trans.home.title}</p>
                        <p className="m-0 pages__home--header--note1">{trans.home.note}</p>
                        <p className="m-0 pages__home--header--note2">{trans.home.note1}</p>
                        <div className="d-flex bases__gap38px bases__margin--top35 align-items-center">
                            <div>
                                <Button buttonText="Book Now" className="pages__home--header--btnBookNow" textColor="white" />
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <Button startIcon={images.ICON_PLAY} iconColor="white" className="pages__home--header--btnPlay" />
                                    <p className="m-0">Take a tour</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <Img src={images.BACKGROUND_HOME} className="pages__home--item" />
                    </div>
                </div>
                <div className="pages__home--header--bookRoom">
                    <div className="d-flex flex-column">
                        <p className="m-0">Location</p>
                        <Select />
                    </div>
                    <div className="d-flex flex-column">
                        <p className="m-0">Room type</p>
                        <Select />
                    </div>
                    <div className="d-flex flex-column">
                        <p className="m-0">Person</p>
                        <Select />
                    </div>
                    <div className="d-flex flex-column">
                        <p className="m-0">Check in</p>
                        <Select />
                    </div>
                    <div className="d-flex flex-column">
                        <p className="m-0">Check out</p>
                        <Select />
                    </div>
                    <div>
                        <Button buttonText="Book Now" className="pages__home--header--btnBookNow" textColor="white" />
                    </div>
                </div>
            </div>
            <div className="bases__padding--top63 bases__background--white">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="m-0 bases__font--40" style={{ fontFamily: 'Poppins' }}>
                        {trans.home.ourFacilities}
                    </p>
                    <p className="m-0 bases__font--15" style={{ fontFamily: 'Poppins' }}>
                        {trans.home.note3}
                    </p>
                </div>
                <div className="col-12 d-flex flex-row justify-content-center bases__gap51px bases__margin--top49 bases__margin--bottom60">
                    <div className="pages__home--benefit">asdf</div>
                    <div className="pages__home--benefit">asdf</div>
                    <div className="pages__home--benefit">sadf</div>
                    <div className="pages__home--benefit">asdf</div>
                </div>
                <div className="col-12 d-flex flex-row justify-content-center bases__gap51px">
                    <div className="pages__home--benefit">asdf</div>
                    <div className="pages__home--benefit">asdf</div>
                    <div className="pages__home--benefit">adfs</div>
                    <div className="pages__home--benefit">adfs</div>
                </div>
            </div>
            <div className="">Luxurious Rooms</div>
            <div className=""></div>
        </div>
    );
};

export default HomePage;
