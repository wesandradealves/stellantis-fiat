import React from 'react';
import ReactDOM from 'react-dom';
import { Container, connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import App from './App';
import Controller from './pages/Agende/Controller';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';


try {

  const addTrackingTag = (event) => {
    let tags = {};
    if(event){
      if(event.fingerprint){
      event.fingerprint = ["tracking-error"]
      };
      tags = event.tags ? event.tags : "";
    }
    return { ...tags, 'thirdParty': 'tracking' };
    }
  
  Sentry.init({
    dsn: 'https://a1b2e1578880407d81bb22f7b4d51f57@o211911.ingest.sentry.io/5997641',
    integrations: [new Integrations.BrowserTracing()],
    denyUrls: [
      // eslint-disable-next-line no-useless-escape
      /(^|^[^:]+:\/\/|[^\.]+\.)dcode\.works/i,
      /^file:\/\//i,
      /^extensions\//i,
      /^chrome:\/\//i,
      /^chrome-extension:\/\//i,
      /^moz-extension:\/\//i,
      /^graph\.facebook\.com/i,
      /^connect\.facebook\.net\/en_US\/all\.js/i,
      ],  
      beforeSend(event, hint) {
        const error = (hint && hint.originalException) ? hint.originalException : {};
        const matchRegex = /clarity|doubleclick|dbclick|google-analytics|googletagmanager|google|analytics|gtm/gi;

        if(event){
          if (error && error.message && error.message.match(matchRegex)) {
          if(event.tags){
            event.tags = addTrackingTag(event);
          }
          }
          if (event.breadcrumbs && event.breadcrumbs.find(
            function (b) {
            if(b && b.message){
             return matchRegex.test(b.message)
            }
            return false;
            }
          )) {
          if(event.tags){
            event.tags = addTrackingTag(event);
          }
          }
          if (event.stacktrace && event.stacktrace.frames && event.stacktrace.frames.find(
          function (f) {
            if(f && f.module){
            matchRegex.test(f.module)
            }
            return false;
          }
          )) {
          if(event.tags){
          event.tags = addTrackingTag(event);
          }
        }
        }
        return event;
      },    
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.1,
  }); 
} catch (error) {
  Sentry.captureException(error);  
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
