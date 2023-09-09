import history from '.';

export default history.listen((location, action) => {
	if (process.env.NODE_ENV === 'production' || !process.env.VERBOSE) return;
	console.log(
		[
			`The current URL is ${location.pathname}${location.search}${location.hash}`,
			`The last navigation action was ${action}`,
			'--',
		].join('\n'),
	);
});
