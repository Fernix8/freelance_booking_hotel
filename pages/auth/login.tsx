import { Img, LoginForm } from '@components/index';

import { ILoginPageProps, ILoginPage } from '@interfaces/pages/login';
import { images } from '@utils/constants';
import { useTrans } from '@utils/hooks';

const LoginPage: ILoginPage<ILoginPageProps> = () => {
    const trans = useTrans();
    return (
        <div className="pages__login container d-flex align-items-center justify-content-between p-3 w-100">
            <div className="col-md-5">
                <div className="bases__padding--bottom48">
                    <h1 className="bases__font--36">{trans.auth.welcome}</h1>
                    <p className="m-0 bases__font--20">{trans.auth.slogan}</p>
                </div>
                <LoginForm />
            </div>
            <div className="col-md-5">
                <Img src={images.BACKGROUND_LOGIN} className="img-fluid h-100" />
            </div>
        </div>
    );
};

export default LoginPage;
