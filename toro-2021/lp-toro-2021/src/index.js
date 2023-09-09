import React from 'react';
import ReactDOM from 'react-dom';
import { Container, connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import App from './App';
import Controller from './pages/Agende/Controller';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

try {
	const addTag = (event) => {
		const tags = event.tags ?? {};
		return { ...tags, 'thirdParty': 'tracking' };
	}
	Sentry.init({
    dsn: 'https://4b948bd96721450a9ca698e6c6a41b31@o211911.ingest.sentry.io/5997672',
		integrations: [new Integrations.BrowserTracing()],
		beforeSend(event) {
			const matchRegex = /clarity|doubleclick|analytics|gtm/g;
			if (event.breadcrumbs?.find((b) => matchRegex.test(b?.message ?? ''))) {
				event.tags = addTag(event);
			}
			if (event.stacktrace?.frames?.find((f) => matchRegex.test(f?.module ?? ''))) {
				event.tags = addTag(event);
			}
			return event;
		},

		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: 0.05,
	});
} catch (error) {
	console.log(error);
}

const putDeviceTypeOnBody = mobile => {
  document.body.classList.remove(
    mobile ? 'is-desktop' : 'is-mobile',
  );
  document.body.classList.add(
    mobile ? 'is-mobile' : 'is-desktop',
  );
};

const Device = connect(
  { media: state`useragent.media` },
  ({ media, ...props }) => {
    putDeviceTypeOnBody(media.mobile);
    return (
      <App
        {...props}
        mobile={media.mobile}
        desktop={!media.mobile}
      />
    );
  },
);

ReactDOM.render(
  <Container controller={Controller}>
    <Device />
  </Container>,
  document.getElementById('root'),
);
