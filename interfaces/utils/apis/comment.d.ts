interface ICommentAPIData {
    comment_id?: number;
    news_id?: number;
    content?: string;
    user?: IUserAPIData;
    created_at?: string;
}

interface IGetCommentListAPIRes {
    data?: {
        comments?: ICommentAPIData[];
    };
}

interface ICreateCommentAPIRes {
    createComment?: {
        comment_id?: number;
    };
}
