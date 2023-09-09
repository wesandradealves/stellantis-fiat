import React from 'react';
import cls from 'classnames';
// import axios from 'axios';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import { Link } from 'react-router-dom';
import { connect } from '@cerebral/react';
import { state, signal, props } from 'cerebral/tags';
import { form, field } from '@cerebral/forms';
import { TweenLite } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { DataLayer } from '@dcode/react/components/DataLayer';
import Loading from '~/components/Loading/Loading';
import ErrorMessage from './errorMessage/ErrorMessage';
import InputConnect from './inputConnect/InputConnect';
import InputContainer from './inputContainer/InputContainer';
import Select from './select/Select';
import Check from './check/Check';
import Concessionaria from './concessionaria/Concessionaria';
import { getCeps, getCities, getIbgeMap } from './FormScheduleModule';
//import { filterCities, filterCitiesByCep } from './FormScheduleUtils';
import css from './FormSchedule.scss';
import { LgpdParagraf } from '~/components/Lgpd/LgpdParagraf';

export const dataPhoneType = [
  { value: 'home', name: 'Residencial' },
  { value: 'mobile', name: 'Celular' },
  { value: 'business', name: 'Comercial' },
];

export const dataTypePerson = [
  { value: 'Vendas', name: 'Pessoa Física - CPF' },
  { value: 'Vendas Diretas - Autonomy', name: 'Pessoa com Deficiência - PcD' },
  {
    value: 'Vendas Diretas - PJ - Micro empresário',
    name: 'Micro empresário - CNPJ',
  },
  { value: 'Vendas Diretas - Taxista', name: 'Taxista' },
  { value: 'Vendas Diretas - Produtor Rural', name: 'Produtor Rural' },
  { value: 'Vendas Diretas - PJ - Locadora', name: 'Locadora' },
  { value: 'Vendas Diretas - PJ - Auto Escola', name: 'Auto Escola' },
];

export const dataTypeVersion = [
  { value: 'ACX', name: 'MOBI LIKE 1.0 FLEX 4P 2022' },
  { value: 'ABX', name: 'MOBI TREKKING 1.0 FLEX 4P 2022' },
];

export const classes = {
  global: 'is-form-open',
  root: css.formSchedule,
  alert: css.alert,
  alert: css.alertText,
  text: css.textAlert,
  row: css.row,
  uLight: css.uLight,
  uBold: css.uBold,
  gr5: css.gr5,
  gr6: css.gr6,
  gr10: css.gr10,
  gr12: css.gr12,
  gr4Mobile: css.gr4Mobile,
  size14: css.size14,
  size22: css.size22,
  size24: css.size24,
  size36: css.size36,
  size20Mobile: css.size20Mobile,
  size22Mobile: css.size22Mobile,
  size24Mobile: css.size24Mobile,
  size26Mobile: css.size26Mobile,
  size36Mobile: css.size36Mobile,
  prefix1: css.prefix1,
  prefix0Mobile: css.prefix0Mobile,
  suffix1: css.suffix1,
  suffix0Mobile: css.suffix0Mobile,
  btnRemove: css.btnRemove,
  btnCloseFeedback: css.btnCloseFeedback,
  btnClose: css.btnClose,
  btnAddPhone: css.btnAddPhone,
  btnSend: css.btnSend,
  btnUpper: css.btnUpper,
  autocomplete: css.autocomplete,
  autocompleteItem: css.autocompleteItem,
  contentPhone: css.contentPhone,
  inputContainer: css.inputContainer,
  ddd: css.ddd,
  phone: css.phone,
  txtLoading: css.txtLoading,
  feedbackModal: css.feedbackModal,
  block: css.block,
  container: css.container,
  formOne: css.formOne,
  text: css.text,
  separator: css.separator,
  phones: css.phones,
  textArea: css.textArea,
  formTwo: css.formTwo,
  cities: css.cities,
  textCities: css.textCities,
  isActive: css.isActive,
  concessionarias: css.concessionarias,
  errorMsgConsessionaria: css.errorMsgConsessionaria,
  hasMask: css.hasMask,
  ___: '',
  title: css.title,
  txtStatus: css.txtStatus,
};

export const defaultProps = {
  className: '',
  classes,
};

export class FormSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      phone1: true,
      phone2: false,
      phone3: false,
      suggestions: [],
      dealers: this.props.dealers,
      nomeBotao: 'Esconder',
      classeDiv: 'show',
      dealerPhone: '+553121236000',
    };
    this.props = props;
    console.log('constructor DEALERS', this.props.dealers);
  }

  componentDidMount() {
    DataLayer.push('FormSchedule_Abriu');
    TweenLite.to(document.querySelector('.FormSchedule'), 1, {
      scrollTo: { y: 0, autoKill: false },
    });
    window.scrollTo(null, 0);
    const locationSearch = window.location && window.location.hash ? window.location.hash.split('?')[1] : '';
    const queryString = new URLSearchParams(
      locationSearch || '',
    );
    const utmValues = {
      campaign:
        queryString.get('utmCampaign') ||
        queryString.get('utm_campaign') ||
        '',
      content:
        queryString.get('utmContent') ||
        queryString.get('utm_content') ||
        '',
      medium:
        queryString.get('utmMedium') ||
        queryString.get('utm_medium') ||
        'none',
      source:
        queryString.get('utmSource') ||
        queryString.get('utm_source') ||
        'direct',
    };
    Object.keys(utmValues).forEach(key => {
      this.props.actionSetField({
        path: `formSchedule.form.${key}`,
        value: utmValues[key] || '',
      });
    });
  }

  componentWillMount() {
    document.body.classList.add(classes.global);
    if (!this.props.isInit) {
      this.props.initForm();
    }
  }

  getLinkWhatsApp = (phone, text) => {
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      text,
    )}`;
  };

  hide = () => {
    console.log('esconder');
    this.hide.style.renderAlert.display.none;
  };

  componentWillUnmount() {
    document.body.classList.remove(classes.global);
  }

  onClickSend = (sendToBot = false) => {
    const { formSchedule } = this.props;
    if (!formSchedule.isValid && formSchedule.concessionaria.isValid) {
      TweenLite.to(document.querySelector('.FormSchedule'), 1, {
        scrollTo: { y: 0, autoKill: false },
      });
    }
    this.props.actionTouchForm({ form: 'formSchedule.form' });
    if (formSchedule.isValid) {
      DataLayer.push('FormSchedule_ClicouEnviar');
      if (sendToBot) {
        this.props.submitFormToBot();
      }
      this.props.submitForm();
    }
  };

  renderPhones = () => {
    const { phone1, phone2, phone3 } = this.state;
    const showRemove =
      (phone1 ? 1 : 0) + (phone2 ? 1 : 0) + (phone3 ? 1 : 0) > 1;
    const list = [1, 2, 3];
    return list.map((v, k) => {
      // Força mostrar apenas uma mensagem de erro DDD/Telefone para nao quebrar o layout
      const foundErrorDDD = !this.props.formSchedule[`ddd${v}`].isValid;
      if (!this.state[`phone${v}`]) {
        return null;
      }

      return (
        <div className={cls(classes.row, classes.contentPhone)} key={k}>
          <div
            className={cls(
              classes.gr6,
              classes.gr4Mobile,
              classes.inputContainer,
            )}
          >
            <InputConnect
              filter={(v) => v.substr(0, 2)}
              path={`formSchedule.form.ddd${v}`}
            >
              <input
                className={cls(
                  classes.size24,
                  classes.size26Mobile,
                  classes.ddd,
                )}
                placeholder="DDD"
                maxLength={2}
                type="number"
              />
            </InputConnect>

            <InputConnect
              tracking="telefone"
              filter={(v) => v.substr(0, 9)}
              path={`formSchedule.form.phone${v}`}
            >
              <input
                className={cls(
                  classes.size24,
                  classes.size26Mobile,
                  classes.phone,
                )}
                placeholder="Número"
                maxLength={9}
                type="number"
              />
            </InputConnect>

            {foundErrorDDD ? (
              <ErrorMessage path={`formSchedule.form.ddd${v}`} />
            ) : (
              <ErrorMessage path={`formSchedule.form.phone${v}`} />
            )}
          </div>
          <div
            className={cls(
              classes.gr5,
              classes.prefix1,
              classes.gr4Mobile,
              classes.prefix0Mobile,
              classes.inputContainer,
            )}
          >
            <ErrorMessage path={`formSchedule.form.phoneType${v}`} />
            {showRemove && (
              <div
                className={cls(classes.btnRemove)}
                onClick={this.onRemovePhoneClick.bind(this, v)}
              />
            )}
          </div>
        </div>
      );
    });
  };

  onAddPhoneClick = () => {
    if (!this.state.phone1) {
      this.setState({ phone1: true });
      this.props.addPhoneValidation({ index: 1 });
    } else if (!this.state.phone2) {
      this.setState({ phone2: true });
      this.props.addPhoneValidation({ index: 2 });
    } else if (!this.state.phone3) {
      this.setState({ phone3: true });
      this.props.addPhoneValidation({ index: 3 });
    }
  };

  onRemovePhoneClick = (index) => {
    const object = {};
    object[`phone${index}`] = false;
    this.setState(object);
    this.props.removePhoneValidation({ index });
  };

  onChangeConcessionaria = (evt) => {
    // Gera e atualiza o número de telefone com o da concessionária
    // ------------------------------------------------------------
    // axios
    // .get('https://fcabmc.cs.blip.ai/fiat/Dealer/phone?dealerId='+ evt.target.value)
    // .then((response) => this.setState({
    // 	dealerPhone: '+' + response.data.dealerPhone.phoneNumber,
    // }));
  };

  renderConcessionarias = () => {
    if (this.props.isLoadingDealers) {
      return (
        <div className={cls(classes.gr12, classes.gr4Mobile)}>
          <div
            className={cls(
              classes.txtLoading,
              classes.size24,
              classes.uBold,
              classes.size22Mobile,
            )}
          >
            Carregando
          </div>
        </div>
      );
    }
    if (this.props.dealers.length == 0) {
      return (
        <div className={cls(classes.gr12, classes.gr4Mobile)}>
          <div
            className={cls(
              classes.txtLoading,
              classes.size24,
              classes.uBold,
              classes.size22Mobile,
            )}
          >
            Não foram encontradas concessionárias em{' '}
            {this.props.cityData.cityName}
          </div>
        </div>
      );
    }
    return this.props.dealers.map((v, k) => {
      return (
        <InputConnect
          key={k}
          path="formSchedule.form.concessionaria"
          onChange={this.onChangeConcessionaria}
        >
          <Concessionaria data={v} />
        </InputConnect>
      );
    });
  };

  renderSuggestions = () => {
    // console.log('render suggestions');
    const { suggestions } = this.state;
    if (!suggestions.length) return;
    return (
      <ul
        className={cls('', {
          visible: suggestions.length,
        })}
      >
        {suggestions.map((x, i) => (
          <li
            className="autocomplete-item"
            key={i}
            onClick={() => this.suggestionsSelected(x)}
          >
            {x.cityName + ' - ' + x.stateCode}
          </li>
        ))}
      </ul>
    );
  };

  onTextChanged = (evt) => {
    console.log('onTextChanged');
    let value = evt.target.value;
    if (value.length > 0) {
      fetch(
        `https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=${value}${
          value.length >= 5 ? '' : '&limit=10'
        }&includeInfluenceArea=true`,
      )
        .then((response) => response.json())
        .then((res) => this.setState({ suggestions: res }))
        .catch((error) => console.log(error));
    }
  };

  suggestionsSelected = (params) => {
    this.props.setCity(params);
    this.setState({
      suggestions: [],
      value: params.cityName + ' - ' + params.stateCode,
    });
  };

  alterarEstado() {
    let Estado;
    let NomeBotao;
    if (this.state.classeDiv === 'show') {
      Estado = 'hide';
      NomeBotao = 'Mostrar';
    } else {
      Estado = 'show';
      NomeBotao = 'Esconder';
    }
    this.setState({
      nomeBotao: NomeBotao,
      classeDiv: Estado,
    });
  }

  state = {
    isActive: true,
  };

  handleShow = () => {
    this.setState({ isActive: true });
  };

  handleHide = () => {
    this.setState({ isActive: false });
  };

  renderTeste() {
    return (
      <div>
        {this.state.isActive || (
          <div className="alert">
            <div className="textAlert">
              <p className="size-14 size-26-mobile u-light text alert-text">
                Visando a comodidade de todos, informamos que nossas
                concessionárias estão com horários reduzidos ou inoperantes.
                Caso necessite de algum serviço ou informação, pedimos que entre
                em contato com a concessionária de seu interesse ou envie seus
                dados que retornaremos assim que possível.
              </p>
            </div>

            <div className="button">
              {this.state.isActive ? (
                <a
                  className="btn-send btn-upper u-bold size-24 size-26-mobile"
                  onClick={this.handleHide}
                >
                  Entendi
                </a>
              ) : (
                <a
                  className="btn-send btn-upper u-bold size-24 size-26-mobile"
                  onClick={this.handleShow}
                >
                  Entendi
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  renderAlert() {
    return (
      <div className="alert">
        <div className="textAlert">
          <p className="size-14 size-26-mobile u-light text alert-text">
            Visando a segurança de todos, informamos que nossas concessionárias
            estão com horários reduzidos ou inoperantes. Caso necessite de algum
            serviço ou informação, pedimos que entre em contato com a
            concessionária de seu interesse ou envie seus dados que retornaremos
            assim que possível.
          </p>
        </div>
        <div className="button">
          <a
            className="btn-send btn-upper u-bold size-24 size-26-mobile"
            onClick={this.hide}
          >
            Entendi
          </a>
        </div>
      </div>
    );
  }

  render() {
    const { phone1, phone2, phone3 } = this.state;
    const { media, className, formSchedule } = this.props;
    const { typePerson } = formSchedule;
    //const cities = getCities();
    //const ceps = getCeps();
    /*let citiesToRender = [];
		if (cities && cities.length > 0 && ceps && ceps.length > 0 && this.state.value.length > 0) {
			if (this.state.value[0] * 1 == this.state.value[0]) {
				citiesToRender = filterCitiesByCep(cities, getCeps(), this.state.value);
			} else {
				citiesToRender = filterCities(cities, this.state.value);
			}
		}*/
    if (this.props.responseData) {
      DataLayer.push('FormSchedule_Enviou', this.props.responseData.status);
    }

    return (
      <div className={cls(classes.root, className)}>
        {this.props.responseData && (
          <div className={cls(classes.feedbackModal)}>
            <div
              className={cls(
                classes.block,
                classes.size24,
                classes.size24Mobile,
              )}
            >
              <div className={cls(classes.txtStatus)} tracking="lead-gerado">
                {this.props.responseData
                  ? 'Formulário enviado. Agora é só aguardar o nosso contato.'
                  : 'Erro ao enviar o formulário.'}
              </div>
              <DataLayer onEvent={'FormSchedule_ClicouFechar'}>
                <Link to={'/'}>
                  <a
                    className={cls(classes.btnCloseFeedback, classes.uBold)}
                    tracking="fechar-enviado"
                    onClick={() => {
                      this.props.closeResponse({ form: 'formSchedule.form' });
                    }}
                  >
                    FECHAR
                  </a>
                </Link>
              </DataLayer>
            </div>
            <DataLayer onEvent={'FormSchedule_ClicouFechar'}>
              <Link
                to={'/'}
                onClick={this.props.toggleForm}
                className={cls(classes.btnClose)}
                tracking="fechar-x-enviado"
              >
                <img alt="Fechar" src={require('./assets/btn-close.png')} />
              </Link>
            </DataLayer>
          </div>
        )}
        <DataLayer onEvent={'FormSchedule_ClicouFechar'}>
          <Link
            to={'/'}
            onClick={this.props.toggleForm}
            className={cls(classes.btnClose)}
            tracking="fechar"
          >
            <img alt="Fechar" src={require('./assets/btn-close.png')} />
          </Link>
        </DataLayer>
        <div
          className={cls(
            classes.container,
            classes.size14,
            classes.size20Mobile,
          )}
        >
          <div className={cls(classes.row)}>
            <div
              className={cls(
                classes.gr10,
                classes.prefix1,
                classes.suffix1,
                classes.gr4Mobile,
                classes.prefix0Mobile,
                classes.suffix0Mobile,
                classes.formOne,
              )}
            >
              <div
                className={cls(
                  classes.size36,
                  classes.size36Mobile,
                  classes.uBold,
                  classes.title,
                )}
              >
                Preencha o formulário abaixo e prepare-se para se surpreender
                com todos os detalhes do seu próximo Fiat Mobi.
              </div>
              <div
                className={cls(
                  classes.size24,
                  classes.size26Mobile,
                  classes.uLight,
                  classes.text,
                )}
              >
                Fique tranquilo, um de nossos vendedores entrará em contato com
                você.
              </div>
              <div className={cls(classes.row)}>
                <div
                  className={cls(
                    classes.gr5,
                    classes.suffix1,
                    classes.gr4Mobile,
                    classes.suffix0Mobile,
                  )}
                >
                  <InputContainer label="NOME COMPLETO">
                    <InputConnect
                      tracking="preencheu-nome"
                      path="formSchedule.form.name"
                    >
                      <input
                        className={cls(classes.size24, classes.size26Mobile)}
                      />
                    </InputConnect>
                    <ErrorMessage path="formSchedule.form.name" />
                  </InputContainer>
                  <div className={cls(classes.separator)} />
                  <InputContainer label="E-MAIL">
                    <InputConnect
                      tracking="preencheu-email"
                      path="formSchedule.form.email"
                    >
                      <input
                        className={cls(classes.size24, classes.size26Mobile)}
                      />
                    </InputConnect>
                    <ErrorMessage path="formSchedule.form.email" />
                  </InputContainer>
                  <div className={cls(classes.separator)} />
                  <div className={cls(classes.phones)}>
                    <div className={cls(classes.row)}>
                      <div className={cls(classes.gr6, classes.gr4Mobile)}>
                        <InputContainer
                          label="TELEFONE"
                          tracking="preencheu-telefone"
                        />
                      </div>
                    </div>
                    {this.renderPhones()}
                    {(!phone1 || !phone2 || !phone3) && (
                      <div
                        className={cls(
                          classes.size22,
                          classes.size26Mobile,
                          classes.uLight,
                          classes.btnAddPhone,
                        )}
                        onClick={this.onAddPhoneClick}
                        tracking="add-telefone"
                      >
                        <img
                          alt="Adicionar telefone"
                          src={require('./assets/add.png')}
                        />{' '}
                        Adicionar telefone
                      </div>
                    )}
                  </div>
                </div>
                {media.mobile && <div className={cls(classes.separator)} />}
                <div className={cls(classes.gr6, classes.gr4Mobile)}>
                  <div className={cls(classes.row)}>
                    <div className={cls(classes.gr5, classes.gr4Mobile)}>
                      <InputContainer label="SELECIONE SEU PERFIL">
                        <InputConnect
                          onChange={(evt) => {
                            DataLayer.push(
                              'FormSchedule_PreencheuPerfil',
                              evt.target.value,
                            );
                          }}
                          path={'formSchedule.form.typePerson'}
                          tracking="preencheu-perfil"
                        >
                          <Select
                            data={dataTypePerson}
                            placeholder="Selecione seu perfil"
                          />
                        </InputConnect>
                        <ErrorMessage path="formSchedule.form.typePerson" />
                      </InputContainer>
                    </div>
                    {media.mobile && <div className={cls(classes.separator)} />}
                    <div
                      className={cls(
                        classes.gr5,
                        classes.prefix1,
                        classes.gr4Mobile,
                        classes.prefix0Mobile,
                      )}
                    >
                      <InputContainer label="CPF/CNPJ">
                        <InputConnect
                          tracking="cpf-cnpj"
                          tracking="preencheu-cnpfj"
                          path={'formSchedule.form.cpfCnpj'}
                          maskFormats={['999.999.999-99', '99.999.999/9999-99']}
                        >
                          <input
                            className={cls(
                              classes.size24,
                              classes.size26Mobile,
                              classes.hasMask,
                            )}
                            maxLength={14}
                            type="text"
                          />
                        </InputConnect>
                        <ErrorMessage path="formSchedule.form.cpfCnpj" />
                      </InputContainer>
                    </div>
                  </div>
                  <div className={cls(classes.separator)} />
                  <div className={cls(classes.___)}>
                    <InputContainer label="SELECIONE UMA VERSÃO">
                      <InputConnect
                        onChange={(evt) => {
                          DataLayer.push(
                            'FormSchedule_PreencheuVersao',
                            evt.target.value,
                          );
                        }}
                        tracking="preencheu-versao"
                        path={'formSchedule.form.typeVersion'}
                      >
                        <Select
                          data={dataTypeVersion}
                          placeholder="Selecione uma versão"
                        />
                      </InputConnect>
                      <ErrorMessage path="formSchedule.form.typeVersion" />
                    </InputContainer>
                  </div>
                  <div className={cls(classes.separator)} />
                  <InputContainer label="MENSAGEM">
                    <InputConnect
                      path={'formSchedule.form.message'}
                      tracking="preencheu-mensagem"
                    >
                      <textarea
                        className={cls(
                          classes.textArea,
                          classes.size24,
                          classes.size26Mobile,
                        )}
                        placeholder="Digite sua mensagem"
                      />
                    </InputConnect>
                    <ErrorMessage path="formSchedule.form.message" />
                  </InputContainer>
                  <div className={cls(classes.separator)} />
                  {/* <InputConnect
										onChange={(evt) => {
											DataLayer.push('FormSchedule_ClicouReceberComunicacaoTelefone', evt.target.value);
										}}
										tracking='clicou-nao-receber-comunicacao-telefone'
										path={'formSchedule.form.fl_sms'}>
										<Check label='Aceito Receber Comunicação via Telefone (SMS/WhatsApp)' />
									</InputConnect>
									<InputConnect
										onChange={(evt) => {
											DataLayer.push('FormSchedule_ClicouReceberComunicacaoEmail', evt.target.value);
										}}
										tracking='clicou-nao-receber-comunicacao-email'
										path={'formSchedule.form.fl_email'}>
										<Check label='Aceito Receber Comunicação via E-mail' />
									</InputConnect> */}
                  <LgpdParagraf />
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.cityData && (
          <div className="form-two">
            <div className="container">
              <div className="size-36 size-36-mobile u-bold">
                Escolha uma das concessionárias abaixo
              </div>
              <div className="cities">
                <div className="size-24 size-26-mobile u-light text-cities">
                  Caso sua cidade não tenha sido localizada digite o nome da
                  cidade
                </div>
                <div className="autocomplete">
                  <input
                    className="autocomplete-item"
                    className={cls('autocomplete-item', {
                      error: this.state.errorDealers,
                    })}
                    id="autoComplete"
                    name="autoComplete"
                    autoComplete="false"
                    type="text"
                    value={this.state.value}
                    required
                    onInput={(e) => this.setState({ value: e.target.value })}
                    onChange={this.onTextChanged}
                  />
                  {this.renderSuggestions()}
                </div>
              </div>
              <div className="row concessionarias">
                {this.renderConcessionarias()}
              </div>
              <div className="error-msg-consessionaria">
                <ErrorMessage path="formCountdown.form.concessionaria" />
              </div>
              {!this.props.isLoading && (
                <div className={'btn-wrapper'}>
                  <p className={'size-36 size-36-mobile u-bold btn-title'}>
                    Preencheu o formulário?
                    <br />
                    Agora, é so enviar sua proposta ou falar com a gente.
                  </p>
                  <div className="btn-container">
                    <div
                      className={cls(
                        'btn-send',
                        'u-bold',
                        'size-24',
                        'size-26-mobile',
                        { ['is-disabled']: !formSchedule.isValid },
                      )}
                      onClick={() => this.onClickSend(false)}
                    >
                      ENVIAR
                    </div>
                    <span className="btn-divider">ou</span>
                    <DataLayer onEvent={'FormSchedule_ClicouWhatsApp'}>
                      <a
                        className={cls(
                          'btn-whatsapp',
                          'u-bold',
                          'size-24',
                          'size-26-mobile',
                          { ['is-disabled']: !formSchedule.isValid },
                        )}
                        href={this.getLinkWhatsApp(
                          this.state.dealerPhone,
                          'Quero meu FIAT 0km',
                        )}
                        target="_blank"
                        onClick={() => this.onClickSend(true)}
                      >
                        <i className={cls('fa', 'fa-whatsapp')} /> FALE COM UM
                        ASSISTENTE
                      </a>
                    </DataLayer>
                  </div>
                </div>
              )}
              {this.props.isLoading && (
                <div className="btn-send u-bold size-24 size-26-mobile">
                  ENVIANDO...
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  {
    media: state`useragent.media`,
    formSchedule: form(state`formSchedule.form`),
    actionSetField: signal`formSchedule.setField`,
    actionTouchForm: signal`formSchedule.touchForm`,
    removePhoneValidation: signal`formSchedule.removePhoneValidation`,
    addPhoneValidation: signal`formSchedule.addPhoneValidation`,
    toggleForm: signal`formSchedule.toggleForm`,
    setCity: signal`formSchedule.setCity`,
    submitForm: signal`formSchedule.submitForm`,
    submitFormToBot: signal`formSchedule.submitFormToBot`,
    isInit: state`formSchedule.isInit`,
    initForm: signal`formSchedule.init`,
    closeResponse: signal`formSchedule.closeResponse`,
    cityData: state`formSchedule.cityData`,
    dealers: state`formSchedule.dealers`,
    isLoading: state`formSchedule.isLoading`,
    isLoadingDealers: state`formSchedule.isLoadingDealers`,
    responseData: state`formSchedule.responseData`,
  },
  FormSchedule,
);
