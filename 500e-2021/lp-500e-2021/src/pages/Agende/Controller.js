/* eslint-disable */
import { Controller, Module } from 'cerebral';
import Devtools from 'cerebral/devtools';
import Useragent from '@cerebral/useragent';
import FormsProvider from '@cerebral/forms';
import FormScheduleModule from './FormScheduleModule';
import {
  isRequired,
  isCpf,
  isCnpj,
  isCpfCnpj,
} from './CerebralUtils';

// @cerebral/useragent bugfeat -------
window.feature = window.feature || {};
// -----------------------------------

const rootModule = Module({
  state: {
    title: process.env.REACT_APP_NAME,
    connectionSpeed: 'loading',
  },

  signals: {
    appLoaded: [
      ctx => {
        let time =
          (new Date().getTime() -
            window.performance.timing.connectStart) /
          1000;
        if (time < 10) {
          ctx.state.set('connectionSpeed', 'fast');
        } else {
          ctx.state.set('connectionSpeed', 'slow');
        }
      },
    ],
  },

  modules: {
    formSchedule: FormScheduleModule,
    useragent: Useragent({
      window: true,
      feature: true,
      media: {
        mobile: '(max-width: 768px)',
        desktop: '(min-width: 769px)',
      },
      parse: {
        browser: true,
        device: true,
      },
      offline: {
        checkOnLoad: false,
        interceptRequests: true,
        requests: false,
        reconnect: {
          initialDelay: 3,
          delay: 1.5,
        },
      },
    }),
  },

  providers: {
    forms: FormsProvider({
      rules: {
        isRequired: isRequired,
        isCpf: isCpf,
        isCnpj: isCnpj,
        isCpfCnpj: isCpfCnpj,
      },
      errorMessages: {
        isRequired(value) {
          return 'Preencha o campo.';
        },
        minLength(value, minLength) {
          return `The length is ${value.length}, should be equal or more than ${minLength}`;
        },
      },
    }),
  },
});

const controller = Controller(rootModule, {
  devtools: /production/gi.test(process.env.NODE_ENV)
    ? null
    : Devtools({
        host: 'localhost:9000',
        reconnect: false,
        https: false,
      }),
});

export default controller;
