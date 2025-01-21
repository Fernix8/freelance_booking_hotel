import { useRouter } from 'next/router';
import { en, vn } from '@utils/lang';

const useTrans = () => {
    const { locale } = useRouter();

    const trans = locale === 'kr' ? vn : en;

    return trans;
};

export default useTrans;
