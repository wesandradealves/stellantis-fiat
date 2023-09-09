import apply from './apply';

export function attempt(cmd, context, args) {
	try {
		return apply(cmd, context, args);
	} catch (err) {
		return err;
	}
}

export default attempt;
