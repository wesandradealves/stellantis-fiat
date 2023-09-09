/* eslint-disable */
import React from 'react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';
import { form } from '@cerebral/forms';
// import { TweenLite } from 'gsap/all';
import { DataLayer } from '../../components/Track/DataLayer/DataLayer';
import { LgpdParagraf } from './components/LgpdParagraf';
import Img from './components/Img';
import ErrorMessage from './errorMessage/ErrorMessage';
import InputConnect from './inputConnect/InputConnect';
import InputContainer from './inputContainer/InputContainer';
import Select from './select/Select';
import Concessionaria from './concessionaria/Concessionaria';
import css from './FormSchedule.scss';
import btnClosePNG from './assets/btn-close.png';
import './styles.scss';

export const dataPhoneType = [
  { value: 'home', name: 'Residencial' },
  { value: 'mobile', name: 'Celular' },
  { value: 'business', name: 'Comercial' },
];

export const dataTypePerson = [
  { value: 'Vendas', name: 'Pessoa Física - CPF' },
  {
    value: 'Vendas Diretas - Autonomy',
    name: 'Pessoa com Deficiência - PcD',
  },
  {
    value: 'Vendas Diretas - PJ - Micro empresário',
    name: 'Micro empresário - CNPJ',
  },
  { value: 'Vendas Diretas - Taxista', name: 'Taxista' },
  {
    value: 'Vendas Diretas - Produtor Rural',
    name: 'Produtor Rural',
  },
  { value: 'Vendas Diretas - PJ - Locadora', name: 'Locadora' },
  {
    value: 'Vendas Diretas - PJ - Auto Escola',
    name: 'Auto Escola',
  },
];

export const dataTypeVersion = [
  {
    value: '2261PJ1',
    name: 'NOVA TORO ENDURANCE 1.8 AT6 FLEX 2022',
  },
  {
    value: '2261PG1',
    name: 'NOVA TORO ENDURANCE TURBOFLEX AT6 2022',
  },
  {
    value: '2261RJ1',
    name: 'NOVA TORO FREEDOM TURBOFLEX AT6 2022',
  },
  {
    value: '2261SJ1',
    name: 'NOVA TORO VOLCANO TURBOFLEX AT6 2022',
  },
  {
    value: '2261PH1',
    name: 'NOVA TORO ENDURANCE TURBODIESEL AT9 2022',
  },
  {
    value: '2261RH1',
    name: 'NOVA TORO FREEDOM TURBODIESEL AT9 2022',
  },
  {
    value: '2261SH1',
    name: 'NOVA TORO VOLCANO TURBODIESEL AT9 2022',
  },
  {
    value: '2261WH1',
    name: 'NOVA RANCH TURBODIESEL AT9 2022',
  },
  {
    value: '2261TH1',
    name: 'NOVA ULTRA TURBODIESEL AT9 2022',
  },
];

const classes = {
  global: 'is-form-open',
  root: css.agende,
  row: css.row,
  uLight: css.uLight,
  uBold: css.uBold,
  gr5: css.gr5,
  gr6: css.gr6,
  gr10: css.gr10,
  gr12: css.gr12,
  gr4Mobile: css['gr4@mobile'],
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
  prefix0Mobile: css['prefix0@mobile'],
  suffix1: css.suffix1,
  suffix0Mobile: css['suffix0@mobile'],
  btnRemove: css.btnRemove,
  btnCloseFeedback: css.btnCloseFeedback,
  btnClose: css.btnClose,
  btnAddPhone: css.btnAddPhone,
  btnSend: css.btnSend,
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

const defaultProps = {
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
      windowSize: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
    this.onSendClick = this.onSendClick.bind(this);
    this.renderPhones = this.renderPhones.bind(this);
    this.onAddPhoneClick = this.onAddPhoneClick.bind(this);
    this.onRemovePhoneClick = this.onRemovePhoneClick.bind(this);
    this.renderConcessionarias = this.renderConcessionarias.bind(
      this,
    );
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.onTextChanged = this.onTextChanged.bind(this);
    this.suggestionsSelected = this.suggestionsSelected.bind(
      this,
    );
    console.log('constructor DEALERS', this.props.dealers);
  }

  componentDidMount() {
    DataLayer.init('FormSchedule_Abriu');
    // DataLayer.push('FormSchedule_Abriu');
    $([document.documentElement, document.body]).animate(
      {
        // eslint-disable-next-line
        scrollTop: $('#root').offset().top,
      },
      0,
    );
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
    // window.scrollTo(null, 0);
  }

  componentWillMount() {
    document.body.classList.add(classes.global);
    if (!this.props.isInit) {
      this.props.initForm();
    }
  }

  componentWillUnmount() {
    document.body.classList.remove(classes.global);
    window.removeEventListener('resize', this.updatePredicate);
  }

  onClickSend = (sendToBot = false) => {
    const { formSchedule } = this.props;
    if (
      !formSchedule.isValid &&
      formSchedule.concessionaria.isValid
    ) {
      $([document.documentElement, document.body]).animate(
        {
          // eslint-disable-next-line
          scrollTop: $('#root').offset().top,
        },
        0,
      );
    }
    this.props.actionTouchForm({ form: 'formSchedule.form' });
    if (formSchedule.isValid) {
      DataLayer.push('FormSchedule_Enviou');
      if (sendToBot) {
        this.props.submitFormToBot();
      }
      this.props.submitForm();
    }
  };

  onSendClick() {
    DataLayer.push('FormSchedule_Enviou');
    const { formSchedule } = this.props;
    if (
      !formSchedule.isValid &&
      formSchedule.concessionaria.isValid
    ) {
      $([document.documentElement, document.body]).animate(
        {
          // eslint-disable-next-line
          scrollTop: $('#root').offset().top,
        },
        0,
      );
    }
    this.props.actionTouchForm({ form: 'formSchedule.form' });
    if (formSchedule.isValid) {
      DataLayer.push('FormSchedule_Enviou');
      this.props.submitForm();
    }
  }

  renderPhones() {
    const { phone1, phone2, phone3 } = this.state;
    const showRemove =
      (phone1 ? 1 : 0) + (phone2 ? 1 : 0) + (phone3 ? 1 : 0) > 1;
    const list = [1, 2, 3];
    return list.map((v, k) => {
      // Força mostrar apenas uma mensagem de erro DDD/Telefone para nao quebrar o layout
      // const foundErrorDDD = !this.props.formSchedule[`ddd${v}`]
      //   .isValid;
      if (!this.state[`phone${v}`]) {
        return null;
      }

      return (
        <div key={k}>
          <InputConnect
            filter={v => v.substr(0, 2)}
            path={`formSchedule.form.ddd`}
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
              onFocus={() => {
                DataLayer.push(
                  'FormSchedule_PreencheuCampo',
                  'preencheu-ddd',
                );
              }}
            />
          </InputConnect>

          <InputConnect
            tracking="telefone"
            filter={v => v.substr(0, 9)}
            path={`formSchedule.form.phone`}
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
              onFocus={() => {
                DataLayer.push(
                  'FormSchedule_PreencheuCampo',
                  'preencheu-telefone',
                );
              }}
            />
          </InputConnect>

          {/* {foundErrorDDD ? (
            <ErrorMessage path={`formSchedule.form.ddd`} />
          ) : (
            <ErrorMessage path={`formSchedule.form.phone${v}`} />
          )} */}
        </div>
      );
    });
  }

  onAddPhoneClick() {
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
  }

  onRemovePhoneClick(index) {
    const object = {};
    object[`phone${index}`] = false;
    this.setState(object);
    this.props.removePhoneValidation({ index });
  }

  renderConcessionarias() {
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
        >
          <Concessionaria data={v} />
        </InputConnect>
      );
    });
  }

  renderSuggestions() {
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
  }

  onTextChanged(evt) {
    console.log('onTextChanged');
    let value = evt.target.value;
    if (value.length > 0) {
      fetch(
        `https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=${value}${
          value.length >= 5 ? '' : '&limit=10'
        }&includeInfluenceArea=true`,
      )
        .then(response => response.json())
        .then(res => this.setState({ suggestions: res }))
        .catch(error => console.log(error));
    }
  }

  suggestionsSelected(params) {
    this.props.setCity(params);
    this.setState({
      suggestions: [],
      value: params.cityName + ' - ' + params.stateCode,
    });
  }
  updatePredicate() {
    this.setState({ windowSize: window.innerWidth > 1020 });
  }

  render() {
    const { media, className } = this.props;
    const { phone1, phone2, phone3, windowSize } = this.state;
    const { typePerson } = this.props.formSchedule;
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
      DataLayer.push('FormSchedule_Enviou');
    }

    return (
      <div className="agende">
        {this.props.responseData && (
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'fixed',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#000000CC',
              zIndex: '100',
            }}
          >
            <div className={'block'}>
              <div
                className={'txtstatus'}
                tracking="lead-gerado"
              >
                {this.props.responseData.status == true &&
                  'Mensagem enviada com sucesso. Agora é só aguardar o nosso contato.'}
                {this.props.responseData.status == false &&
                  'Erro ao enviar o formulário.'}
              </div>

              <Link to={'/'} className={'fecharbuttoncontainer'}>
                <span
                  className={
                    (cls(
                      classes.btnCloseFeedback,
                      classes.uBold,
                    ),
                    'button')
                  }
                  tracking="fechar-enviado"
                  onClick={() => {
                    DataLayer.push('FormSchedule_ClicouFechar');
                    this.props.closeResponse({
                      form: 'formSchedule.form',
                    });
                  }}
                >
                  FECHAR
                </span>
              </Link>
              <Link
                to={'/'}
                onClick={() => {
                  this.props.toggleForm;
                  DataLayer.push('FormSchedule_ClicouFechar');
                }}
                className={
                  (cls(classes.btnClose), 'x-buttonclose')
                }
                tracking="fechar-x-enviado"
              >
                <Img alt="Fechar" src={btnClosePNG} />
              </Link>
            </div>
          </div>
        )}

        <DataLayer onEvent={'FormSchedule_ClicouFechar'}>
          <Link
            to={'/'}
            onClick={() => {
              this.props.toggleForm;
              DataLayer.push('FormSchedule_ClicouFechar');
            }}
            className="btn-close"
            tracking="fechar"
          >
            <Img
              className="img-close"
              alt="Fechar"
              src={btnClosePNG}
            />
          </Link>
        </DataLayer>

        <div
          className={cls(
            classes.container,
            classes.size14,
            classes.size20Mobile,
          )}
        >
          <div className="row">
            <div className="form-one">
              <div className="title">
                Preencha o formulário abaixo e prepare-se para se
                surpreender com todos os detalhes da sua próxima
                Fiat Toro.
              </div>
              <div className="subtitle">
                Fique tranquilo, um de nossos vendedores entrará
                em contato com você.
              </div>

              <div className="form-row">
                <div>
                  <InputContainer label="NOME COMPLETO*">
                    <InputConnect
                      tracking="preencheu-nome"
                      path="formSchedule.form.name"
                    >
                      <input
                        className={cls(
                          classes.size24,
                          classes.size26Mobile,
                        )}
                        onFocus={() => {
                          DataLayer.push(
                            'FormSchedule_PreencheuCampo',
                            'preencheu-nome',
                          );
                        }}
                        // onfocusout={DataLayer.push('FormSchedule_PreencheuCampo', 'nome-completo')}
                        // onKeyDown={(e) => { if (e.keyCode === 9) e.preventDefault() }}
                      />
                    </InputConnect>
                    <ErrorMessage path="formSchedule.form.name" />
                  </InputContainer>

                  <div className="separator" />

                  <InputContainer label="E-MAIL">
                    <InputConnect
                      tracking="preencheu-email"
                      path="formSchedule.form.email"
                    >
                      <input
                        className={cls(
                          classes.size24,
                          classes.size26Mobile,
                        )}
                        onFocus={() => {
                          DataLayer.push(
                            'FormSchedule_PreencheuCampo',
                            'preencheu-e-mail',
                          );
                        }}
                      />
                    </InputConnect>
                    <ErrorMessage path="formSchedule.form.email" />
                  </InputContainer>

                  <div className="separator" />

                  <div className="row">
                    <div style={{ width: '100%' }}>
                      <div className={cls(classes.phones)}>
                        <div className="row">
                          <div>
                            <InputContainer
                              label="TELEFONE"
                              tracking="preencheu-telefone"
                            />
                          </div>
                        </div>
                        {this.renderPhones()}
                      </div>
                    </div>
                    {windowSize ? <LgpdParagraf /> : null}
                  </div>
                </div>

                {media.mobile && <div className="separator" />}

                <div
                  className={cls(classes.gr6, classes.gr4Mobile)}
                >
                  <div className={cls(classes.row)}>
                    <div
                      className={cls(
                        classes.gr12,
                        classes.gr4Mobile,
                        classes.prefix0Mobile,
                      )}
                    >
                      <InputContainer label="CPF/CNPJ">
                        <InputConnect
                          tracking="cpf-cnpj"
                          tracking="preencheu-cnpfj"
                          path={'formSchedule.form.cpfCnpj'}
                          maskFormats={[
                            '999.999.999-99',
                            '99.999.999/9999-99',
                          ]}
                        >
                          <input
                            className={cls(
                              classes.size24,
                              classes.size26Mobile,
                              classes.hasMask,
                            )}
                            maxLength={18}
                            type="text"
                            onFocus={() => {
                              DataLayer.push(
                                'FormSchedule_PreencheuCampo',
                                'preencheu-cpf-cnpj',
                              );
                            }}
                          />
                        </InputConnect>
                        <ErrorMessage path="formSchedule.form.cpfCnpj" />
                      </InputContainer>
                    </div>
                  </div>

                  <div className="separator" />

                  <div>
                    <InputContainer label="SELECIONE UMA VERSÃO">
                      <InputConnect
                        onChange={evt => {
                          DataLayer.push(
                            'FormSchedule_PreencheuCampo',
                            'selecionou-versao',
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

                  <div className="separator" />

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
                        onFocus={() => {
                          DataLayer.push(
                            'FormSchedule_PreencheuCampo',
                            'preencheu-mensagem',
                          );
                        }}
                      />
                    </InputConnect>
                    <ErrorMessage path="formSchedule.form.message" />
                  </InputContainer>

                  <div className="separator" />

                  {windowSize == false ? <LgpdParagraf /> : null}

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
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.props.cityData && (
          <div className="form-two">
            <div className="container">
              <div className="size-36 size-36-mobile u-bold title">
                Escolha uma das concessionárias abaixo
              </div>
              <div className="cities">
                <div className="size-24 size-26-mobile u-light text-cities text">
                  Caso sua cidade não tenha sido localizada
                  digite o nome da cidade
                </div>
                <div className="autocomplete">
                  <input
                    className="autocomplete-item"
                    className={cls('autocomplete-item', {
                      error: this.state.errorDealers,
                    })}
                    id="autoComplete"
                    name="autoComplete"
                    autoComplete="autocomplete_off_hack_xfr4!k"
                    type="search"
                    value={this.state.value}
                    onInput={evt =>
                      this.setState({ value: evt.target.value })
                    }
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
                <div
                  className={cls(
                    'btn-send',
                    'u-bold',
                    'size-24',
                    'size-26-mobile',
                  )}
                  onClick={this.onSendClick}
                >
                  ENVIAR
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
