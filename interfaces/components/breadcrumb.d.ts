interface IBreadcrumbItem {
    href?: string;
    title?: string;
    onClick?: () => void;
}

interface IBreadcrumbProps extends IBaseCompProps {
    items?: IBreadcrumbItem[];
}

interface IBreadcrumb<P = {}> extends IBaseComp<P> {}
