import { Modal as ModalBootstrap } from 'react-bootstrap';
import Img from '@components/commons/Img';
import Button from '@components/commons/Button';

import { setModal } from '@redux/actions';

import { images } from '@utils/constants';
import { ReduxStates } from '@redux/store';
import { useAppDispatch, useAppSelector, useTrans } from '@utils/hooks';

const Modal: IModalComponent<IModalComponentProps> = () => {
    const trans = useTrans();
    const dispatch = useAppDispatch();
    const modal = useAppSelector((states: ReduxStates) => states.modal);

    const handleModalHide = () => {
        if (modal.onClose && modal.isShow) {
            modal.onClose();
        }
        dispatch(
            setModal({
                ...modal,
                isShow: !modal.isShow,
            }),
        );
    };

    return (
        <ModalBootstrap centered={true} show={modal.isShow} onHide={() => handleModalHide()} keyboard={false}>
            <div className="components__modal-heading d-flex justify-content-between align-items-center">
                <div className="bases__text--bold bases__font--20 bases__text--black w-100 text-center">{modal?.title}</div>
                <Img
                    className="bases__p--cursor bases__filter--blue-gray"
                    onClick={() => handleModalHide()}
                    width={24}
                    height={24}
                    src={images.ICON_CLOSE}
                />
            </div>
            <div className="components__modal-content d-flex justify-content-center text-pre-wrap bases__padding--horizontal20">
                <div>{modal?.content ?? <></>}</div>
            </div>
            <div className="components__modal-footer d-flex justify-content-center">
                {modal.button ?? <></>}
                {modal?.isHideButtonCancle !== true && (
                    <Button
                        className="bases__margin--right8 bases__width100px bases__height40px"
                        onClick={() => handleModalHide()}
                        fontSize="16"
                        background="teal-light"
                        textColor="white"
                        buttonText={modal.cancelText ?? trans.common.cancel}
                    />
                )}
            </div>
        </ModalBootstrap>
    );
};

export default Modal;
