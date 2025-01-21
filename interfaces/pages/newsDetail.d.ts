import { IBasePageProps, IBasePage } from '@interfaces/pages/base';

interface INewsDetailPageProps extends IBasePageProps {}

interface INewsDetailPage<P = {}> extends IBasePage<P> {}

interface INewsDetailPageState {
    news?: INewsAPIData;
    comments?: ICommentAPIData[];
}
