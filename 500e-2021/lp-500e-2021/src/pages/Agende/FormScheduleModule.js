/* eslint-disable */
import fetchJsonp from 'fetch-jsonp';
import { Module } from 'cerebral';
import {
  set,
  push,
  splice,
  when,
  toggle,
} from 'cerebral/operators';
import { setField, resetForm } from '@cerebral/forms/operators';
import { state, props } from 'cerebral/tags';
import {
  findCityByName,
  getCookie,
  getCookieDirect,
} from './FormScheduleUtils';

const messageDDD = 'DDD inválido';
const messagePhone = 'Telefone inválido';
const messagePhoneType = 'Selecione o tipo';

// let ga;
// let geoip2;
let cities;
let ceps = null;
let ibgeMap = {};

export function getCities() {
  console.log('get cities');
  return cities;
}

export function getCeps() {
  console.log('get ceps');
  return ceps;
}

export function getIbgeMap() {
  console.log('get ibge map');
  return ibgeMap;
}

const setCity = [
  //props.cityName .. nome da cidade ou cep
  function ({ props, module }) {
    module.set('cityData', props);
    console.log('cityData PROPS', props);
    module.set('isLoadingDealers', true);
    module.set('form.concessionaria.value', '');
  },
  function ({ props }) {
    let idBrand = 0;
    let influenceAreas;
    if (props.cityData) {
      influenceAreas = props.cityData.influenceAreas.filter(
        x => x.brand.id === idBrand,
      );
    } else {
      influenceAreas = props.influenceAreas.filter(
        x => x.brand.id === idBrand,
      );
    }

    //influenceAreas[0].code = 310620;
    console.log('setCity/dealers', influenceAreas[0].code);
    console.log(
      `https://dealer-service.k8s.fcalatam.com.br/dealerws/dealer?brandId=${idBrand}&influenceAreaCode=${influenceAreas[0].code}&dealerType=EA+-+CONCESSIONARIA+SEMIPLENA+%7C+EV+-+CONCESSIONARIA+SHOW+ROOM+%7C+CP+-+CONCESSIONARIA+COMPACTA+%7C+PL+-+CONCESSIONARIA+PLENA+%7C+SM+-+CONCESSIONARIA+SEMIPLENA`,
    );

    return fetch(
      `https://dealer-service.k8s.fcalatam.com.br/dealerws/dealer?brandId=${idBrand}&influenceAreaCode=${influenceAreas[0].code}&dealerType=EA+-+CONCESSIONARIA+SEMIPLENA+%7C+EV+-+CONCESSIONARIA+SHOW+ROOM+%7C+CP+-+CONCESSIONARIA+COMPACTA+%7C+PL+-+CONCESSIONARIA+PLENA+%7C+SM+-+CONCESSIONARIA+SEMIPLENA`,
    )
      .then(res => res.json())
      .then(data => {
        return { dealers: data };
      });
  },
  function ({ props, module }) {
    module.set('dealers', props.dealers);
    //console.log('dealers retorno no set city:', props.dealers)
    module.set('isLoadingDealers', false);
  },
];

function formatPhone(ddd, phone) {
  return `(${ddd}) ${phone.substring(0, 4)}-${phone.substring(
    4,
    phone.length,
  )}`.substring(0, 40);
}

function getPhoneField(phoneType) {
  if (phoneType === 'home') {
    return 'homePhone';
  } else if (phoneType === 'mobile') {
    return 'mobile';
  }
  return 'phone';
}

const mock = false;

export default Module({
  state: {
    cities: [],
    ceps: [],
    isInit: false,
    isLoading: true,
    isLoadingDealers: false,
    dealers: [],
    cityData: null,
    isOpen: false,
    responseData: null,
    form: {
      name: {
        value: mock ? 'Gustavo Teste' : '',
        validationRules: ['isRequired'],
        customErrorMessage: 'Campo obrigatório',
      },
      email: {
        value: mock ? 'teste@teste.com.br' : '',
        validationRules: ['isRequired', 'isEmail'],
        customErrorMessage: 'Email inválido.',
      },

      ddd: {
        value: mock ? '54' : '',
        validationRules: ['isRequired'],
        customErrorMessage: messageDDD, //'DDD inválido',
      },

      phone: {
        value: mock ? '1123123121' : '',
        validationRules: ['isRequired'],
        customErrorMessage: messagePhone, //'Telefone inválido',
      },
      typeVersion: {
        value: '',
        validationRules: ['isRequired'],
        customErrorMessage: 'Por favor, selecione uma versão.',
      },

      cpfCnpj: {
        value: mock ? '04546928971' : '',
        validationRules: ['isRequired', 'isCpfCnpj'],
        customErrorMessage: 'CPF/CNPJ inválido.',
      },
      message: {
        value: '',
      },
      fl_email: {
        value: true,
      },
      fl_sms: {
        value: true,
      },
      concessionaria: {
        validationRules: ['isRequired'],
        customErrorMessage:
          'Por favor, selecione uma concessionária.',
        value: '',
      },
    },
  },
  signals: {
    submitForm: [
      ({ module }) => {
        // https://integradorfca.fcalatam.com.br/?callback=JSONPCallback&retUrl=www.fiat.com.br&dealersCode=909705&origin=Receptiva&uf=RS&cidade=Caxias+do+Sul&ga_client_id=GA1.3.2096194996.1517849154&ga_transaction_id=1517919199012_2096194996.1517849154&source=DIRECT&medium=(none)&campaign=direto&content=direto&term=direto&productCode=341A4X0&information=Ve%C3%ADculo+Montado+pela+Receptiva&oid=00DA0000000A11h&firstName=asdas&email=dasda%40asd.com.br&google_client_id=GA1.3.2096194996.1517849154&device=Desktop&cpf=045.469.289-71&homePhone=(54)+1231-23123&indPhoneContact=false&indEmailContact=true&referer=http%3A%2F%2Fmobi.fiat.com.br%2F&clientId=2096194996.1517849154&callback=JSONPCallback&description=asddsadsadsasaddsa&productGroup=Vendas+Diretas+-+PJ&mobile=(54)+2222-22222&phone=(54)+3333-33333&_=1517917782714
        let device;
        if (navigator.userAgent.match(/Tablet|iPad/i)) {
          device = 'Tablet';
        } else if (
          navigator.userAgent.match(
            /IEMobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Mobile Safari|Opera Mini|\bCrMo\/|Opera Mobi/i,
          )
        ) {
          device = 'Mobile';
        } else {
          device = 'Desktop';
        }

        let data = {
          dealersCode: module.get('form.concessionaria.value'),
          uf: module.get('cityData.stateCode'),
          cidade: module.get('"cityData.cityName'),
          origin: 'Internet',
          origem: 'Internet',
          suborigem: 'Test Drive Web Site',
          productCode: module.get('form.typeVersion.value'),
          CodigoProduto__c: module.get('form.typeVersion.value'),
          SubOrigem__C: 'Test Drive Web Site',
          retUrl: 'www.fiat.com.br',
          ga_client_id: getCookie('_ga'),
          ga_transaction_id:
            new Date().getTime() +
            module.get('form.cpfCnpj.value'),
          source: getCookieDirect('utm_source'),
          medium: getCookie('utm_medium'),
          campaign: getCookie('utm_campaign'),
          content: getCookie('utm_content'),
          term: getCookie('utm_term'),
          information: 'Veículo Montado pela Receptiva',
          oid: '00DA0000000A11h', // HARDCODED NO FORM...
          firstName: module.get('form.name.value'),
          email: module.get('form.email.value'),
          google_client_id:
            (document.cookie.match(/\b_ga=([^;]*)/) || [])[1] ||
            null,
          device: device,
          cpf: module.get('form.cpfCnpj.value'),
          indPhoneContact: module.get('form.fl_sms.value')
            ? 'true'
            : 'false',
          indEmailContact: module.get('form.fl_email.value')
            ? 'true'
            : 'false',
          referer: location.href,
          productGroup: 'Vendas Diretas',
          clientId:
            (document.cookie.match(
              /\bIsobar_ClientID=([^;]*)/,
            ) || [])[1] || null,
          description: module.get('form.message.value'),
        };

        if (module.get('form.ddd.value') != '') {
          data.phone = formatPhone(
            module.get('form.ddd.value'),
            module.get('form.phone.value'),
          );
        }

        const params = `?${Object.keys(data)
          .map(function (prop) {
            return [prop, data[prop]]
              .map(encodeURIComponent)
              .join('=');
          })
          .join('&')}`;

        let url = `https://integradorfca.fcalatam.com.br/${params}`;

        module.set('isLoading', true);

        return fetchJsonp(url)
          .then(res => {
            return res.json();
          })
          .then(data => {
            if (data.status) {
              // ga('send', 'event', {
              // 	eventCategory: 'test-drive:formulario',
              // 	eventAction: 'finalizacao',
              // 	eventLabel: 'sucesso',
              // });
            } else {
              // ga('send', 'event', {
              // 	eventCategory: 'test-drive:formulario',
              // 	eventAction: 'finalizacao',
              // 	eventLabel: 'erro:[Rejeição dos dados pelo integrador.]',
              // });
            }
            return { responseData: data };
          });
      },
      ({ props, module }) => {
        module.set('responseData', props.responseData);
        module.set('isLoading', false);
      },
    ],

    setCity: [...setCity],

    init: [
      function () {
        return new Promise(function (resolve, reject) {
          if (!window.geoip2) {
            return console.log('!window.geoip2:', window.geoip2);
          } else {
            console.log('geoip2 init', window.geoip2);
          }
          window.geoip2.city(
            a => {
              resolve({
                cityName: a.city.names.en,
                uf: a.subdivisions[0].iso_code,
              });
            },
            () => reject({ cityName: 'São Paulo', uf: 'SP' }),
          );
        });
      },
      function (ctx) {
        console.log('funcao ctx', ctx.props);
        ctx.module.set('isLoading', false);
        return findCityByName(ctx.props);
      },
      ...setCity,
    ],

    toggleForm: [
      ctx => {
        if (!ctx.state.get('formSchedule.isOpen')) {
          // trackingEvent('botao', 'header', 'test-drive');
        }
      },
      toggle(state`formSchedule.isOpen`),
    ],

    closeResponse: [
      createTouchForm(false),
      resetForm(state`formSchedule.form`),
      ({ module }) => {
        module.set('responseData', null);
      },
    ],

    setField: [
      setField(state`${props`path`}`, props`value`),
      set(state`${props`path`}.focus`, true),
    ],

    touchedField: [set(state`${props`path`}.touched`, true)],

    touchForm: [createTouchForm(true)],

    addPhoneValidation: [
      ({ props, state }) => {
        const index = props.index;
        state.set('formSchedule.form.ddd.validationRules', [
          'isRequired',
        ]);
        state.set('formSchedule.form.phone.validationRules', [
          'isRequired',
        ]);
      },
    ],

    removePhoneValidation: [
      ({ props, state }) => {
        const index = props.index;
        state.set('formSchedule.form.ddd.validationRules', []);
        state.set('formSchedule.form.phone.validationRules', []);
      },
    ],
  },
});

function createTouchForm(flag = true) {
  return function touchForm({ state, props }) {
    const form = props.form;
    let { fields } = props;

    if (!fields) {
      fields = Object.keys(state.get(form));
    }

    fields.map(v => {
      const path = `${form}.${v}`;
      state.set(`${path}.touched`, flag);
      return path;
    });
  };
}
