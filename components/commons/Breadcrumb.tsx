import Link from 'next/link';

import Img from '@components/commons/Img';

import { routes, images } from '@utils/constants';

const Breadcrumb: IBreadcrumb<IBreadcrumbProps> = (props) => {
    const { items } = props;

    const renderBreadcrumb = () => {
        return items?.map((item, index) => (
            <li key={index} className="components__breadcrumb-item bases__text--black bases__font--16 bases__padding--left10">
                <Link scroll={false} href={item.href ?? ''}>
                    <a onClick={() => item.onClick && item.onClick()}>{item.title}</a>
                </Link>
            </li>
        ));
    };

    return (
        <nav>
            <ol className="components__breadcrumb bases__margin--bottom27">
                <li className="components__breadcrumb-item bases__text--blue">
                    <Link scroll={false} href={routes.CLIENT.HOME.href}>
                        <a>
                            <Img className="bases__filter--blue bases__p--cursor" src={images.ICON_HOUSE} />
                        </a>
                    </Link>
                </li>
                {renderBreadcrumb()}
            </ol>
        </nav>
    );
};
export default Breadcrumb;
