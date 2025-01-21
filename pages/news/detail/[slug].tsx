import { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useRouter } from 'next/router';

import { CommentForm } from '@components/index';

import { INewsDetailPage, INewsDetailPageProps, INewsDetailPageState } from '@interfaces/pages/newsDetail';

import { useTrans } from '@utils/hooks';

import { fetchListComment, fetchDetailNews } from '@redux/actions';
import { ReduxStates } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';

const NewsDetailPage: INewsDetailPage<INewsDetailPageProps> = () => {
    const trans = useTrans();
    const { account } = useSelector((states: ReduxStates) => states);
    const [state, setState] = useState<INewsDetailPageState>({
        news: {},
        comments: [],
    });
    const { news, comments } = state;

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        handleFetchDetailNews();
        handleFetchListComment();
    }, []);

    useEffect(() => {
        if (news?.news_id) {
            handleFetchListComment();
        }
    }, [news]);

    const handleFetchDetailNews = async () => {
        if (router.query.slug) {
            dispatch(
                await fetchDetailNews(router.query.slug.toString() ?? '', (result: IGetNewsDetailAPIRes | IErrorAPIRes | null) => {
                    setState((prevState) => ({
                        ...prevState,
                        news: (result as IGetNewsDetailAPIRes)?.data?.new,
                    }));
                }),
            );
        }
    };

    const handleFetchListComment = async () => {
        dispatch(
            await fetchListComment({ news_id: news?.news_id ?? 0 }, (result: IGetCommentListAPIRes | IErrorAPIRes | null) => {
                if (result) {
                    setState((prevState) => ({
                        ...prevState,
                        comments: (result as IGetCommentListAPIRes)?.data?.comments,
                    }));
                }
            }),
        );
    };

    return (
        <div className="pages__news container">
            {news && (
                <>
                    <div className="title">{news.title}</div>
                    <div className="main my-3">
                        <div className="main-image my-3">
                            <img src={news.thumbnail_url} alt="" className="" />
                        </div>
                        <div className="mail-content">{news.content}</div>
                    </div>
                </>
            )}

            <div className="comment d-flex flex-column">
                <div className="comment-top d-flex flex-column">
                    <div className="comment-top-title">
                        {trans.news.comment}
                        {comments && <span> ({comments.length})</span>}
                    </div>

                    {Object.keys(account).length > 0 && (
                        <div className="d-flex comment-top-profile my-2 align-items-center">
                            <img src={account.avatar ?? ''} alt="" className="avatar" />
                            <div className="username mx-2">{account.name}</div>
                        </div>
                    )}
                </div>
                <CommentForm news={news} onComplete={() => handleFetchListComment()} />
                <div className="comment-bottom">
                    <Tabs defaultActiveKey="most_interested" className="mb-3">
                        <Tab eventKey="most_interested" title={trans.news.most_interested}>
                            <div className="list-comment d-flex flex-column">
                                {comments && comments.length > 0 ? (
                                    comments.map((comment, index) => {
                                        return (
                                            <div className="list-comment-item d-flex my-2" key={index}>
                                                <div className="comment-avatar d-flex justify-content-center align-items-center">
                                                    <img src={comment?.user?.avatar ?? ''} alt="" />
                                                </div>
                                                <div className="d-flex comment-content flex-column mx-4">
                                                    <div className="comment-content-text">{comment?.content ?? ''}</div>
                                                    <div className="d-flex comment-content-more">
                                                        <div>Reply</div>
                                                        <div>Share</div>
                                                        <div>{comment?.created_at ?? ''}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div>No Items</div>
                                )}
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailPage;
