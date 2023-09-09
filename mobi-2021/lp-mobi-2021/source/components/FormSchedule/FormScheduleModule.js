import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';
import { Module } from 'cerebral';
import { set, toggle } from 'cerebral/operators';
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

/*const setCity = [
	// props.cityName .. nome da cidade ou cep
	function({ props, module }) {
		module.set('cityData', props.cityData);
		module.set('isLoadingDealers', true);
		module.set('form.concessionaria.value', '');
	},
	({ props }) =>
		fetch(
			`https://iabkxl9hnj.execute-api.us-east-1.amazonaws.com/prod/servicos/concessionarias/busca/abrangencia?origem=LEADFORM&cidade=${
				props.cityData.city
			}&uf=${props.cityData.uf}`,
		)
			.then((res) => res.json())
			.then((data) => {
				return { dealers: data.dealers };
			}),
	({ props, module }) => {
		module.set('dealers', props.dealers);
		module.set('isLoadingDealers', false);
	},
];*/

const setCity = [
  // props.cityName .. nome da cidade ou cep
  function({ props, module }) {
    module.set('cityData', props);
    console.log('cityData PROPS', props);
    module.set('isLoadingDealers', true);
    module.set('form.concessionaria.value', '');
  },
  function({ props }) {
    let idBrand = 0;
    let influenceAreas;
    if (props.cityData) {
      influenceAreas = props.cityData.influenceAreas.filter(
        (x) => x.brand.id === idBrand,
      );
    } else {
      influenceAreas = props.influenceAreas.filter(
        (x) => x.brand.id === idBrand,
      );
    }

    //influenceAreas[0].code = 310620;
    console.log('setCity/dealers', influenceAreas[0].code);
    console.log(
      `https://dealer-service.k8s.fcalatam.com.br/dealerws/dealer?brandId=${idBrand}&influenceAreaCode=${
        influenceAreas[0].code
      }&dealerType=EA+-+CONCESSIONARIA+SEMIPLENA+%7C+EV+-+CONCESSIONARIA+SHOW+ROOM+%7C+CP+-+CONCESSIONARIA+COMPACTA+%7C+PL+-+CONCESSIONARIA+PLENA+%7C+SM+-+CONCESSIONARIA+SEMIPLENA`,
    );

    return fetch(
      `https://dealer-service.k8s.fcalatam.com.br/dealerws/dealer?brandId=${idBrand}&influenceAreaCode=${
        influenceAreas[0].code
      }&dealerType=EA+-+CONCESSIONARIA+SEMIPLENA+%7C+EV+-+CONCESSIONARIA+SHOW+ROOM+%7C+CP+-+CONCESSIONARIA+COMPACTA+%7C+PL+-+CONCESSIONARIA+PLENA+%7C+SM+-+CONCESSIONARIA+SEMIPLENA`,
    )
      .then((res) => res.json())
      .then((data) => {
        return { dealers: data };
      });
  },
  function({ props, module }) {
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

function getPhoneFieldToBot(phoneType) {
  return 'phoneNumber';
}

function formatMVS(mvs) {
  const model = mvs.slice(0, 3);
  const version = mvs.slice(3, 6);
  const serie = mvs.slice(6, 7);
  return { model, version, serie, mvs };
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

      ddd1: {
        value: mock ? '54' : '',
        validationRules: ['isRequired'],
        customErrorMessage: messageDDD, //'DDD inválido',
      },
      source: {
        value: '',
      },
      medium: {
        value: '',
      },
      content: {
        value: '',
      },
      campaign: {
        value: '',
      },

      phone1: {
        value: mock ? '1123123121' : '',
        validationRules: ['isRequired'],
        customErrorMessage: messagePhone, //'Telefone inválido',
      },
      phoneType1: {},

      ddd2: {
        value: '',
        customErrorMessage: messageDDD, //'DDD inválido',
      },
      phone2: {
        value: '',
        customErrorMessage: messagePhone, //'Telefone inválido',
      },
      phoneType2: {
        value: '',
      },

      ddd3: {
        value: '',
        customErrorMessage: messageDDD, //'DDD inválido',
      },
      phone3: {
        value: '',
        customErrorMessage: messagePhone, //'Telefone inválido',
      },
      phoneType3: {
        value: '',
      },

      typePerson: {
        value: '',
        validationRules: ['isRequired'],
        customErrorMessage: 'Por favor, selecione seu perfil.',
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
      typeVersion: {
        value: '',
        validationRules: ['isRequired'],
        customErrorMessage: 'Selecione uma versão.',
        value: '',
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
        customErrorMessage: 'Por favor, selecione uma concessionária.',
        value: '',
      },
    },
  },
  signals: {
    submitFormToBot: [
      ({ module }) => {
        const { model, version, serie } = formatMVS(
          module.get('form.typeVersion.value'),
        );

        const data = {
          brand: 'fiat',
          model,
          version,
          serie,
          name: module.get('form.name.value'),
          cpf: module.get('form.cpfCnpj.value'),
          email: module.get('form.email.value'),
          dealer: module.get('form.concessionaria.value'),
          color: '',
          scheduleDate: '',
        };

        // phoneNumber
        if (module.get('form.ddd1.value') !== '') {
          data[
            getPhoneFieldToBot(module.get('form.phoneType1.value'))
          ] = formatPhone(
            module.get('form.ddd1.value'),
            module.get('form.phone1.value'),
          );
        }

        const urlBeta = 'http://fcabmc.beta-cs.blip.ai/fiat/Lead/send';
        const urlProd = 'https://fcabmc.cs.blip.ai/fiat/Lead/send';
        const url = urlProd;

        module.set('isLoading', true);

        console.log(
          '[ FORMDATA ---------------------------------------------- ]',
        );
        console.log('[ NODE_ENV:', process.env.NODE_ENV, ']');
        console.log('[ URL:', url, ']');
        console.log('[ DATA:', data, ']');
        console.log(
          '[ /FORMDATA --------------------------------------------- ]',
        );

        return axios
          .post(url, data)
          .then((response) => {
            return { responseData: data };
          })
          .catch((error) => {
            console.error('submitFormToBot:', error);
          });
      },
      ({ props, module }) => {
        module.set('responseData', props.responseData);
        module.set('isLoading', false);
      },
    ],

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

        let productGroup = module.get('form.typePerson.value');
        if (productGroup.indexOf('- PJ') > 0) {
          productGroup = 'Vendas Diretas - PJ';
        }
        const n = module.get('form.name.value').trim().split(' ');
        const fname = n[0];
        const lname = n.slice(1, n.length).join(' ').trim();
  
        let s = '0';
        let m = '341';
        let v = module.get('form.typeVersion.value');
        let y = '2022';
        let pc = (m + v + s);
        let data = {
          dealersCode: module.get('form.concessionaria.value'),
          uf: module.get('cityData.stateCode'),
          cidade: module.get('"cityData.cityName'),
          country: 'Brasil',
          origin: 'Internet',
          origem: 'Internet',
          suborigem: 'Brand Web Site',
          productCode: pc,
          CodigoProduto__c: pc,
          SubOrigem__c: 'Brand Web Site',
          form: 'Proposal',
          retUrl: location.href,
          ga_client_id: getCookie('_ga'),
          ga_transaction_id:
            new Date().getTime() + module.get('form.cpfCnpj.value'),
          campaign:
          module.get('form.campaign.value') ||
          '',
          content:
          module.get('form.content.value') ||
          '',
          medium:
          module.get('form.medium.value') || '',
          source:
          module.get('form.source.value') || '',
          term: 
          getCookie('utm_term') || '',
          information: 'Veículo Montado pela Receptiva',
          oid: '00DA0000000A11h', // HARDCODED NO FORM...
          // firstName: module.get('form.name.value'),
          firstName: fname,
          lastName: lname,
            email: module.get('form.email.value'),
          google_client_id: (document.cookie.match(/\b_gid=([^;]*)/) || [])[1] || null,
          gaclientid: (document.cookie.match(/\b_ga=([^;]*)/) || [])[1] || null,
  
          device: device,
          cpf: module.get('form.cpfCnpj.value'),
          indPhoneContact: module.get('form.fl_sms.value') ? 'true' : 'false',
          indEmailContact: module.get('form.fl_email.value') ? 'true' : 'false',
          
          msc_modelo: m,
          msc_versao: v,
          msc_serie: s,
          msc_ano_modelo: y,
  
          msc_motorNome: null,
          msc_coresNome: null,
          msc_preco_carro: null,
          msc_preco_total: null,
          msc_opcionaisNome: null,
          msc_acessoriosNome: null,
          LinkProposta__c: null,

          referer: location.href,
          productGroup: 'Vendas',
          clientId:
            (document.cookie.match(/\bIsobar_ClientID=([^;]*)/) || [])[1] ||
            null,
          description: module.get('form.message.value'),
        };

        if (module.get('form.ddd1.value') != '') {
          data[
            getPhoneField(module.get('form.phoneType1.value'))
          ] = formatPhone(
            module.get('form.ddd1.value'),
            module.get('form.phone1.value'),
          );
        }
        if (module.get('form.ddd2.value') != '') {
          data[
            getPhoneField(module.get('form.phoneType2.value'))
          ] = formatPhone(
            module.get('form.ddd2.value'),
            module.get('form.phone2.value'),
          );
        }
        if (module.get('form.ddd3.value') != '') {
          data[
            getPhoneField(module.get('form.phoneType3.value'))
          ] = formatPhone(
            module.get('form.ddd3.value'),
            module.get('form.phone3.value'),
          );
        }

        let url = 'https://lead.fcalatam.com.br/HubMicroservices';

        module.set('isLoading', true);

        return fetch(url, { method: "post", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
          .then((res) => res.json())
          .then((data) => {
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
      function() {
        return new Promise(function(resolve, reject) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`,
              ).then((response) => {
                response.json().then((res) => {
                  const cityName = res.city;
                  const uf = res.principalSubdivisionCode.replace('BR -', '');
                  resolve({
                    cityName,
                    uf,
                  });
                });
              });
            },
            (error) => {
              try {
                console.warn(
                  'Error:\n\n' + JSON.stringify(error, undefined, 4),
                );
              } catch (error) {}
              reject({ cityName: 'São Paulo', uf: 'SP' });
            },
          );
        });
      },
      function(ctx) {
        console.log('funcao ctx', ctx.props);
        ctx.module.set('isLoading', false);
        return findCityByName(ctx.props);
      },
      ...setCity,
    ],

    toggleForm: [
      (ctx) => {
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
        state.set('formSchedule.form.ddd' + index + '.validationRules', [
          'isRequired',
        ]);
        state.set('formSchedule.form.phone' + index + '.validationRules', [
          'isRequired',
        ]);
      },
    ],

    removePhoneValidation: [
      ({ props, state }) => {
        const index = props.index;
        state.set('formSchedule.form.ddd' + index + '.validationRules', []);
        state.set('formSchedule.form.phone' + index + '.validationRules', []);
      },
    ],
  },
});

function createTouchForm(flag = true) {
  return function touchForm({ state, props }) {
    const form = props.form;

    let fields = props.fields;
    if (!fields) {
      fields = Object.keys(state.get(form));
    }

    fields.map((v) => {
      const path = `${form}.${v}`;
      state.set(`${path}.touched`, flag);
    });
  };
}
