import ScaleLoader from 'react-spinners/ScaleLoader';
import { useEffect } from 'react';
import { useAppSelector } from '@utils/hooks';
import { ReduxStates } from '@redux/store';

const Loader: ILoaderComponent<ILoaderComponentProps> = () => {
    const loader = useAppSelector((states: ReduxStates) => states.loader);

    useEffect(() => {
        if (loader) {
            document.documentElement.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
        }
    }, [loader]);

    return loader ? (
        <div className="components__loader">
            <div className="components__loader-spinner">
                <ScaleLoader color="#fff" height={40} loading={true} />
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Loader;
