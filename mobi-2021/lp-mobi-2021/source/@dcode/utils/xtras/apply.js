export function apply(cmd, context, args) {
	const $ = args;
	switch ($.length) {
		case 0:
			return cmd.call(context);
		case 1:
			return cmd.call(context, $[0]);
		case 2:
			return cmd.call(context, $[0], $[1]);
		case 3:
			return cmd.call(context, $[0], $[1], $[2]);
		case 4:
			return cmd.call(context, $[0], $[1], $[2], $[3]);
		case 5:
			return cmd.call(context, $[0], $[1], $[2], $[3], $[4]);
		case 6:
			return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5]);
		case 7:
			return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6]);
		case 8:
			return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7]);
		case 9:
			return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8]);
		default:
			return cmd.apply(context, $);
	}
}

export default apply;
