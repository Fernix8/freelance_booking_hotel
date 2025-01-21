import { createRef, useState } from 'react';

import Input from '@components/commons/Input';
import Validator from '@components/commons/Validator';
import Button from '@components/commons/Button';
import LoginForm from '@components/forms/Login';

import { fetchCreateComment, setModal } from '@redux/actions';

import { authHelper, validateHelper } from '@utils/helpers';
import { useTrans } from '@utils/hooks';
import { useDispatch } from 'react-redux';

const CommentForm: ICommentComponent<ICommentComponentProps> = (props) => {
    const { news, onComplete } = props;
    const trans = useTrans();
    const [state, setState] = useState<ICommentComponentState>({
        comment: '',
    });
    const { comment } = state;
    const commentValidatorRef = createRef<IValidatorComponentHandle>();
    const loginFormRef = createRef<ILoginComponentHandle>();

    const dispatch = useDispatch();

    const handleOnChange = (field: string, value: string | number | null) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleCheckLogin = () => {
        if (!authHelper.isAuth()) {
            dispatch(
                setModal({
                    title: trans.news.sign_in_to_comment,
                    isShow: true,
                    content: <LoginForm ref={loginFormRef} />,
                    buttonText: trans.common.ok,
                    onClickButton: () => loginFormRef.current?.onSubmit(),
                }),
            );
        } else {
            handleFetchCreateComment();
        }
    };

    const handleFetchCreateComment = async () => {
        let isValidate = true;

        commentValidatorRef?.current?.onValidateMessage('');
        if (validateHelper.isEmpty(comment ?? '')) {
            commentValidatorRef?.current?.onValidateMessage('Empty');
            isValidate = false;
        }

        if (isValidate) {
            dispatch(
                await fetchCreateComment(
                    { news_id: news?.news_id ?? 0, content: comment },
                    (result: ICreateCommentAPIRes | IErrorAPIRes | null) => {
                        if (result) {
                            setState((prevState) => ({
                                ...prevState,
                                comment: '',
                            }));
                            if (onComplete) {
                                onComplete();
                            }
                        }
                    },
                ),
            );
        }
    };

    return (
        <>
            <div className="mb-3">
                <Validator ref={commentValidatorRef}>
                    <Input
                        name="comment"
                        type="textarea"
                        value={comment}
                        placeholder="Enter comment"
                        onChange={(value: string) => handleOnChange('comment', value)}
                    />
                </Validator>
            </div>
            <div className="mb-3">
                <Button buttonText="Comment" onClick={handleCheckLogin} />
            </div>
        </>
    );
};

export default CommentForm;
