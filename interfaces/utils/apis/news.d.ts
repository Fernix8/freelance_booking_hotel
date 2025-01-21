interface INewsAPIData {
    news_id?: number;
    title?: string;
    slug?: string;
    content?: string;
    thumbnail_url?: string;
}

interface IGetNewsListAPIRes {
    data?: {
        news?: INewsAPIData[];
    };
}

interface IGetNewsDetailAPIRes {
    data: {
        new?: INewsAPIData;
    };
}
