import { env } from '@dcode/utils/env';
import isFn from '@dcode/utils/is/fn/fn';

export function isBuffer(value) {
	if (value === undefined || value === null) return false;
	if (isFn(env.Buffer) === false) return false;
	const isEnvBuffer = value instanceof env.Buffer && isFn(value.constructor.isBuffer);
	return isEnvBuffer && value.constructor.isBuffer(value);
}

export default isBuffer;
