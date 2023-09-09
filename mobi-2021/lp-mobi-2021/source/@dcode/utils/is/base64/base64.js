import isString from '@dcode/utils/is/string/string';

export const reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
export function isBase64(value) {
	return isString(value) && reIsBase64.test(value);
}

export default isBase64;
