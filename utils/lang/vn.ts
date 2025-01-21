export default {
    common: {
        cancel: '취소',
        ok: 'OK',
        page_title: 'School Web',
        no_options: '비어 있는',
        table: {
            total: (total: number) => {
                return `총 ${total}개 항목`;
            },
        },
    },
    auth: {
        welcome: 'Chào Mừng Trở Lại',
        slogan: 'Hôm nay là một ngày mới. Đó là ngày của bạn. Hãy biến nó thành một ngày tuyệt vời cùng với chúng tôi',
    },
    validate: {
        required: {
            email: 'Email là bắt buộc',
            password: 'Mật khẩu là bắt buộc',
        },
        invalid: {
            email: 'Email không hợp lệ',
            password: 'Mật khẩu không hợp lệ',
        },
        length: {
            password: 'Mật khẩu phải có ít nhất 8 ký tự',
        },
    },
    home: {
        title: 'Paradise View',
        note: 'Hotel for every moment rich in emotion',
        note1: 'Every moment feels like the first time in paradise view',
        ourFacilities: 'Our Facilities',
        note3: 'We offer modern (5 star) hotel facilities for your comfort.',
        latest: {
            title: '최근 뉴스',
        },
    },
    news: {
        comment: '논평',
        most_interested: '가장 관심 있는',
        latest: '최신',
        sign_in_to_comment: '댓글을 달려면 로그인하세요.',
    },
};
