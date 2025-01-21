import { createRef, forwardRef, useState } from 'react';

import Validator from '@components/commons/Validator';
import Input from '@components/commons/Input';

import { fetchLogin, setModal } from '@redux/actions';

import { validateHelper } from '@utils/helpers';
import Button from '@components/commons/Button';
import { useRouter } from 'next/router';
import { http, routes } from '@utils/constants';
import { useAppDispatch, useTrans } from '@utils/hooks';

const LoginForm = forwardRef<ILoginComponentHandle, ILoginComponentProps>(() => {
    const router = useRouter();
    const trans = useTrans();
    const dispatch = useAppDispatch();
    const [state, setState] = useState<ILoginComponentState>({
        email: '',
        password: '',
        isValidate: true,
    });
    const { email, password } = state;
    const emailValidatorRef = createRef<IValidatorComponentHandle>();
    const passwordValidatorRef = createRef<IValidatorComponentHandle>();

    const handleOnClickGoogleAccount = async () => {
        window.location.href = 'http://localhost:5000/auth/google';
    };

    const submitForm = async () => {
        let isValidate = true;

        emailValidatorRef?.current?.onValidateMessage('');
        if (validateHelper.isEmpty(email ?? '')) {
            emailValidatorRef?.current?.onValidateMessage(trans.validate.required.email);
            isValidate = false;
        } else if (!validateHelper.isEmail(email ?? '')) {
            emailValidatorRef?.current?.onValidateMessage(trans.validate.invalid.email);
            isValidate = false;
        }

        passwordValidatorRef?.current?.onValidateMessage('');
        if (validateHelper.isEmpty(password ?? '')) {
            passwordValidatorRef?.current?.onValidateMessage(trans.validate.invalid.password);
            isValidate = false;
        } else if ((password ?? '').length < 8) {
            passwordValidatorRef?.current?.onValidateMessage(trans.validate.lenght.password);
            isValidate = false;
        }

        if (isValidate) {
            dispatch(
                await fetchLogin({ email, password }, (result: ILoginAPIRes | IErrorAPIRes | null) => {
                    const error = result as IErrorAPIRes;
                    if (result?.code === http.SUCCESS_CODE) {
                        router.push(routes.CLIENT.HOME.href, undefined, { scroll: false });
                    } else {
                        dispatch(
                            setModal({
                                isShow: true,
                                isHideButtonCancle: true,
                                title: 'Error',
                                content: <div>{error?.message}</div>,
                                button: (
                                    <>
                                        <Button
                                            buttonText="Continue"
                                            background="white"
                                            textColor="black"
                                            borderColor="black"
                                            onClick={() => {
                                                dispatch(setModal({ isShow: false }));
                                            }}
                                        />
                                    </>
                                ),
                            }),
                        );
                    }
                }),
            );
        }
    };

    const handleOnChange = (field: string, value: string | number | null) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return (
        <div className="components__login">
            <div className="mb-3">
                <label className="mb-1" htmlFor="email">
                    Email
                </label>
                <Validator ref={emailValidatorRef}>
                    <Input
                        name="email"
                        type="text"
                        className="components__login--email"
                        id="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(value: string) => handleOnChange('email', value)}
                        onBlur={() => {
                            if (!email) {
                                emailValidatorRef?.current?.onValidateMessage(trans.validate.required.email);
                                setState((prevState) => ({
                                    ...prevState,
                                    isValidate: false,
                                }));
                            } else if (!validateHelper.isEmail(email ?? '')) {
                                emailValidatorRef?.current?.onValidateMessage(trans.validate.invalid.email);
                                setState((prevState) => ({
                                    ...prevState,
                                    isValidate: false,
                                }));
                            } else {
                                emailValidatorRef?.current?.onValidateMessage('');
                                setState((prevState) => ({
                                    ...prevState,
                                    isValidate: true,
                                }));
                            }
                        }}
                    />
                </Validator>
            </div>
            <div className="mb-3">
                <label className="mb-1" htmlFor="password">
                    Password
                </label>
                <Validator ref={passwordValidatorRef}>
                    <Input
                        className="components__login--password"
                        name="email"
                        type="password"
                        id="password"
                        value={password}
                        placeholder="At least 8 characters"
                        onChange={(value: string) => handleOnChange('password', value)}
                        onBlur={() => {
                            if (!password) {
                                passwordValidatorRef?.current?.onValidateMessage(trans.validate.required.password);
                                setState((prevState) => ({
                                    ...prevState,
                                    isValidate: false,
                                }));
                            } else if (password.length < 8) {
                                passwordValidatorRef?.current?.onValidateMessage(trans.validate.lenght.password);
                                setState((prevState) => ({
                                    ...prevState,
                                    isValidate: false,
                                }));
                            } else {
                                passwordValidatorRef?.current?.onValidateMessage('');
                                setState((prevState) => ({
                                    ...prevState,
                                    isValidate: true,
                                }));
                            }
                        }}
                    />
                </Validator>
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <Button fontWeight="semi-bold" buttonText="Forgot Password?" onClick={() => {}} background="white" textColor="blue" />
            </div>
            <Button
                className="w-100 bases__radius12px bases__height52px components__login--signIn"
                background="black-blue"
                buttonText="Sign In"
                textColor="white"
                onClick={() => submitForm()}
            />
            <div className="d-flex justify-content-center gap-4 align-items-end mt-3">
                <span style={{ borderBottom: '1px solid black', width: '100%' }}></span>
                <div>Or</div>
                <span style={{ borderBottom: '1px solid black', width: '100%' }}></span>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-4">
                <Button
                    fontWeight="semi-bold"
                    buttonText="Sign In with Google"
                    onClick={() => handleOnClickGoogleAccount()}
                    background="white"
                    textColor="blue"
                />
                <Button fontWeight="semi-bold" buttonText="Sign In with Apple" onClick={() => {}} background="white" textColor="black" />
            </div>
        </div>
    );
});

export default LoginForm;
