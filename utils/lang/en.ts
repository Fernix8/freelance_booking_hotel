export default {
    common: {
        cancel: 'キャンセル',
        ok: 'OK',
        page_title: 'School Web',
        no_options: 'Empty',
        table: {
            total: (total: number) => {
                return `Total ${total} items`;
            },
        },
    },
    auth: {
        welcome: 'WELCOME BACK',
        slogan: "Today is a new day. It's your day. Make it a great day with us",
    },
    validate: {
        required: {
            email: 'Email is required',
            password: 'Password is required',
        },
        invalid: {
            email: 'Email is invalid',
            password: 'Password is invalid',
        },
        lenght: {
            password: 'Password must be at least 8 characters long',
        },
    },
    home: {
        title: 'Paradise View',
        note: 'Hotel for every moment rich in emotion',
        note1: 'Every moment feels like the first time in paradise view',
        ourFacilities: 'Our Facilities',
        note3: 'We offer modern (5 star) hotel facilities for your comfort.',
        latest: {
            title: 'Latest News',
        },
    },
    news: {
        comment: 'Comment',
        most_interested: 'Most interested',
        latest: 'Latest',
        sign_in_to_comment: 'Sign in to comment',
    },
};
