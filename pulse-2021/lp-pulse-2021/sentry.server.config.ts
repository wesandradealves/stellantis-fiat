import * as Sentry from "@sentry/nextjs";

try {
	const addTag = (event: Sentry.Event) => {
		event.fingerprint = ["tracking-error"];
		const tags = event.tags ?? {};
		return {...tags, 'thirdParty': 'tracking'};
	}
	Sentry.init({
		dsn: "https://01b223b750f84a218a6958785ae279e8@o211911.ingest.sentry.io/5997715",
		denyUrls: [
			/(^|^[^:]+:\/\/.*|[^\.]+\.)dcode\.works(\/)?/i,
			/^file:\/\//i,
			/^extensions\//i,
			/^chrome:\/\//i,
			/^chrome-extension:\/\//i,
			/^moz-extension:\/\//i,
			/^graph\.facebook\.com/i,
			/^connect\.facebook\.net\/en_US\/all\.js/i,
		],
		beforeSend(event) {
			const matchRegex = /clarity|doubleclick|dbclick|google-analytics|googletagmanager|google|analytics|gtm/gi;
			if (event.breadcrumbs?.find((b) => matchRegex.test(b?.message ?? ''))) {
				event.tags = addTag(event);
			}
			return event;
		},
		tracesSampleRate: 0.1,
	});
} catch (error) {
	console.log(error);
}
