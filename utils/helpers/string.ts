import { regex } from '@utils/constants';

export const formatHalfWidthText = (text: string) => {
    return text.replace(/[\uff01-\uff5e]/g, (character) => {
        return String.fromCharCode(character.charCodeAt(0) - 0xfee0);
    });
};

export const limitText = (text: string, char: number) => {
    let allText = text;
    const textLength = allText?.length;
    const startText = allText?.slice(0, char);
    textLength > char ? (allText = `${startText} ...`) : (allText = startText);
    return allText;
};

const isValidBase64String = (base64String: string) => {
    const regexs = regex.RULE.BASE64;
    return regexs.test(base64String);
};

export const convertBase64ToBlob = (base64String: string) => {
    if (isValidBase64String(base64String)) {
        const binaryString = window.atob(base64String.split(',')[1]);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: 'image/jpeg/png' });
        return URL.createObjectURL(blob);
    } else {
        // console.log('Base64 string:', base64String);
        return null;
    }
};

export const formatVietnamPrice = (priceFormat: number): string => {
    const price = parseFloat(priceFormat.toString());
    if (isNaN(price)) {
        return 'Invalid number';
    }
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
