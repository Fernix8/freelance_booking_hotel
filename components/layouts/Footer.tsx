const Footer: IFooterComponent<IFooterComponentProps> = (props) => {
    const { isShow } = props;
    if (isShow) {
        return <div className="components__footer d-flex justify-content-center align-items-center">Copyright 2023 VNEXT Software</div>;
    }
    return <></>;
};

export default Footer;
