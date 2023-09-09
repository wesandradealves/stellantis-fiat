import isFn from '@dcode/utils/is/fn/fn';
import apply from './apply.js';

export function overload(target, name, cmd) {
	const cache = target[name];
	target[name] = function overloadWrapper() {
		if (cmd.length === arguments.length) {
			return apply(cmd, this, arguments);
		} else if (isFn(cache)) {
			return apply(cache, this, arguments);
		}
		return undefined;
	};
}

export default overload;
