/* eslint-disable react/jsx-no-target-blank */
import React, {
  ChangeEvent,
  ClipboardEvent,
  FC,
  FocusEvent,
  useEffect,
  useState,
} from 'react';
import styles from './Form.module.scss';
import { useFormik, FormikProvider } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-text-mask';
import {
  getCepInfo,
  getDealers,
  getCitiesByState,
  postLead,
  getDealersByCity,
} from '@/prox/API';
import {
  Button,
  InputMsgError,
  ModalOfForm,
  Spinner,
  Container,
  SectionElement,
  Conditional, CTAButton,
} from '@/prox/components/';
import {
  formError,
  inputMasks,
  links,
  STATES,
} from '@/project/constants';
import validCPF from '@/prox/utils/validCpf';
import scssStyles from '@/prox/utils/scssStyles';
import validCnpj from '@/prox/utils/validCnpj';
import Store from '@/project/store/Store';
import { useMobxStores } from '@/project/store';
import DataLayer from '@/prox/utils/DataLayer';
import { formImages, ui } from '@/project/assets';
import { observer } from 'mobx-react-lite';
import { ILocation, IVersionData, IQueryString } from '@/prox/models';
import { ChevronRight } from '@components/SvgComponents';
import { dataMenuLabel } from '@/project/data/menu';
import { log } from "util";
import { nameFormatter } from "@/prox/utils/nameFormatter";
import { versionData } from "@/project/data/versionData";
import ResponsiveLazyImage from "@components/ResponsiveLazyImage";

const SUCCESS_MESSAGE = 'SUCESSO! DEU TUDO CERTO COM A SUA SOLICITAÇÃO.';
const FAIL_MESSAGE = 'ALGO DEU ERRADO AO ENVIAR SEUS DADOS. POR FAVOR, TENTE NOVAMENTE.';

const Form: FC = observer(() => {
  const store: Store = useMobxStores();
  const [cepLastFetched, setCepLastFetched] =
    useState<string>('');
  const [sending, setSending] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [isCnpj, setIsCnpj] = useState(false);
  const [cepFetched, setCepFetched] = useState(false);
  const [invalidCep, setInvalidCep] = useState(false);
  const [fetchingDealers, setFetchingDealers] = useState(false);
  const [locationError] = useState({
    state: false,
    city: false,
  });
  const [fetchedViaCity, setFetchedViaCity] = useState(false);
  const [fetchingCities, setFetchingCities] = useState(false);
  const [versionLabelValue, setVersionLabelValue] = useState<IVersionData | undefined>();
  const [queryString, setQueryString] = useState<IQueryString>();
  const refDealers = React.createRef<HTMLDivElement>();
  const refProfile = React.createRef<HTMLDivElement>();
  const refVersion = React.createRef<HTMLDivElement>();



  useEffect(() => {
    const firstVersionSelected = versionData[0];
    setVersionLabelValue(firstVersionSelected);

    const queryString = {
      utm_campaign: store.queryString?.get("utm_campaign") || store.queryString?.get("utm_campaign") || "",
      utm_content: store.queryString?.get("utmContent") || store.queryString?.get("utm_content") || "",
      utm_medium: store.queryString?.get("utmMedium") || store.queryString?.get("utm_medium") || "",
      utm_source: store.queryString?.get("utmSource") || store.queryString?.get("utm_source") || ""
    }

    setQueryString(queryString);


  }, []);

  const filledEvent = (label: string) => {
    DataLayer.filledEvent({
      element: label,
      elementCategory: 'text',
      pageSection: 'formulario',
      pageSubsection: 'lead-cadastro',
    });
  };

  const selectEvent = (element: string, value: string) => {
    DataLayer.selectEvent({
      element: element,
      elementCategory: 'select',
      pageSection: 'formulario',
      pageSubsection: 'lead-cadastro',
      selectedValue: value,
    });
  };

  const clickCheckBox = (label: string) => {
    DataLayer.selectEvent({
      element: label,
      elementCategory: 'radio',
      pageSection: 'formulario',
      pageSubsection: 'lead-cadastro',
    });
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required(formError.REQUIRED_FIELD)
      .matches(/^[^\s]+( [^\s]+)+$/, formError.INVALID_NAME),

    cpf: yup
      .string()
      .required(formError.REQUIRED_FIELD)
      .test('validateCpfCnpj', formError.INVALID_CPF, (value) =>
        isCnpj ? validCnpj(value ?? '') : validCPF(value ?? ''),
      ),
    version: yup.string().required(formError.INVALID_VERSION),
    phone: yup
      .string()
      .required(formError.REQUIRED_FIELD)
      .test(
        'phoneLength',
        formError.INVALID_PHONE,
        (value) => (value?.replace(/\D/g, '')?.length ?? 0) >= 8,
      ),
    ddd: yup.string().required(formError.REQUIRED_FIELD),
    dealer: yup.string().required(formError.REQUIRED_FIELD),
    cep: yup
      .string()
      .test('validCep', formError.INVALID_CEP, () => !invalidCep)
      .required(formError.REQUIRED_FIELD),
    city: yup.string(),
    state: yup.string(),
    email: yup
      .string()
      .email(formError.INVALID_EMAIL)
      .required(formError.REQUIRED_FIELD),
    aceiteComunicacoes: yup
      .string()
      .required(formError.CHECK_TERMS)
      .oneOf(['true'], formError.CHECK_TERMS),
  });

  const handleSucess = () => {
    store.setModalCloseButton(false);
    setModalSuccess(true);
    store.setDealers([]);
    setCepFetched(false);
  };

  const handleError = () => {
    store.setModalCloseButton(false);
    setModalError(true);
  };



  const {
    handleSubmit,
    errors,
    touched,
    values,
    isValidating,
    isSubmitting,
    handleChange,
    handleBlur,
    ...formik
  } = useFormik({
    initialValues: {
      name: '' as string,
      lastName: '' as string,
      cpf: '' as string,
      phone: '' as string,
      version: versionData[0].value || "",
      ddd: '' as string,
      dealer: '' as string,
      cep: '' as string,
      email: '' as string,
      message: '' as string,
      city: '' as string,
      state: '' as string,
      perfil: 'pf' as string,
      aceiteComunicacoes: false as boolean,
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setModalError(false);
      setModalSuccess(false);
      setSending(true);
      DataLayer.clickEvent({
        element: 'cadastrar',
        elementCategory: 'submit',
        pageSection: 'formulario',
        pageSubsection: 'lead-cadastro',
      });
      values.lastName = values.name.trim();


      const response = await postLead({
        ObservacaoCliente__c: `Mensagem: ${values.message}`,
        utm_campaign: queryString?.utm_campaign || "",
        utm_content: queryString?.utm_content || "",
        utm_medium: queryString?.utm_medium || "",
        utm_source: queryString?.utm_source || "",
        cpf: values.cpf,
        email: values.email,
        firstName: nameFormatter(values.name).firstName,
        lastName: nameFormatter(values.name).lastName,
        enableMsgEmail: values.aceiteComunicacoes,
        enableMsgPhone: values.aceiteComunicacoes,
        message: values.message,
        phone: values.ddd + values.phone,
        cidade: store.location?.cityName ?? '',
        uf: store.location?.stateCode ?? '',
        dealersCode: values.dealer,
        productCode: versionLabelValue?.value ?? "",
        msc_modelo: versionLabelValue?.model,
        msc_serie: versionLabelValue?.serie,
        msc_versao: versionLabelValue?.version,
      });
      if (response) {
        formik.resetForm();
        handleSucess();
      } else {
        handleError();
      }
      setSending(false);
    },
  });

  const fetchDealersViaCep = async (
    cep: string,
  ): Promise<boolean> => {
    // if (cepLastFetched === cep) {
    //   return false;
    // }
    setInvalidCep(false);
    setCepLastFetched(cep);
    formik.setFieldValue('dealer', '');
    store.setDealers([]);
    setCepFetched(false);
    setFetchedViaCity(false);
    try {
      setFetchingDealers(true);
      const cepInfo = await getCepInfo(cep);
      if (!cepInfo.success) {
        setInvalidCep(true);
      }
      if (cepInfo.success && cepInfo.location) {
        const dealers = await getDealers(cepInfo.location);
        if (dealers) {
          setCepFetched(true);
          if (dealers.length > 0) {
            store.setDealers(dealers);
            store.setLocation(cepInfo.location);
            setFetchingDealers(false);
            formik.setFieldValue('dealer', '');
            return true;
          }
        }
      } else {
        store.setLocation({} as ILocation);
        store.setDealers([]);
        formik.setFieldValue('dealer', '');
        setInvalidCep(true);
      }
      setFetchingDealers(false);
      return false;
    } catch (error) {
      setFetchingDealers(false);
      return false;
    }
  };



  useEffect(() => {
    if (isSubmitting && !isValidating) {
      const keys = Object.keys(errors);
      if (keys.length > 0) {
        const selector = `[name=${keys[0]}]`;
        const errorElement = document.querySelector(
          selector,
        ) as HTMLElement;
        if (errorElement) {
          errorElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
          // setModalError(true);
        }
      }
    }
  }, [errors, isSubmitting, isValidating]);

  const formatDDD = (element: HTMLInputElement) => {
    const replacedValue =
      element?.value?.replace(/\D/g, '') ?? '';
    const value = replacedValue?.substring(0, 2) ?? '';
    const phoneInput = document.getElementById(
      'phoneInput',
    ) as HTMLInputElement;
    if (value.length === 2 && phoneInput) {
      phoneInput.focus();
    }
    element.value = value;
    formik.setFieldValue('ddd', value);
    return value;
  };
  const reference = dataMenuLabel().find(
    (c) => c.slug === 'agende',
  );

  return (
    <SectionElement
      id="form"
      noPadding
      navReference={reference}
      className={styles.container}
    >

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormikProvider
          value={{
            ...formik,
            isValidating,
            isSubmitting,
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }}
        >
          <Container>
            <Conditional notOn="mobile">
              <ResponsiveLazyImage
                fullBg
                alt={"Formulário"}
                src={formImages.mainBg.fullPath2x}
                src2={formImages.mainBg.fullPath3x}
              />
            </Conditional>

            <Conditional notOn="desktop">
              <ResponsiveLazyImage
                containerClassName={styles.mobileBackground}
                fullBg
                alt={"Formulário"}
                src={formImages.mainBg.fullPath}
                src2={formImages.mainBg.fullPath2x}
              />
            </Conditional>

            <Conditional notOn={'desktop'}>
              <div className={styles.headerText}>
                <h2>
                  Preencha o formulário abaixo e prepare-se
                  para conhecer todos os detalhes do seu novo Fiat Scudo
                </h2>
                <p>Fique tranquilo, um dos nossos vendedores entrará em contato para finalizar o seu atendimento</p>
              </div>
            </Conditional>

            <Conditional notOn={'mobile'}>
              <div className={styles.headerText}>
                <h2>
                  Preencha o formulário abaixo e prepare-se <br />
                  para conhecer todos os detalhes do seu novo Fiat Scudo
                </h2>
                <p>Fique tranquilo, um dos nossos vendedores entrará em contato para finalizar o seu atendimento</p>
                <span className={styles.line} />
              </div>
            </Conditional>

            <div id="mainFields" className={styles.mainFields}>
              {/* Nome Completo */}
              <InputMsgError
                fullLine={true}
                error={!!touched.name && !!errors.name}
                errorMsc={errors.name}
              >
                <div className={styles.field}>
                  <label htmlFor="name">{'Nome Completo'}</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={'Escreva o seu nome completo'}
                    className={(!!touched.name && !!errors.name) ? styles.errorActive : "secondary"}
                    value={values.name}
                    onBlur={(e) => {
                      if (e.currentTarget.value) {
                        filledEvent('nome-completo');
                        handleBlur(e);
                      }
                    }}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
              </InputMsgError>

              {/* Tipo de Perfil */}
              <InputMsgError
                error={!!touched.perfil && !!errors.perfil}
                errorMsc={errors.perfil}
              >
                <div className={styles.field}>
                  <label htmlFor="perfil">
                    {'Selecione o seu perfil'}
                  </label>
                  <div className={styles.inputSelectHolder}>
                    <div
                      ref={refProfile}
                      className={scssStyles([
                        'select',
                        styles.inputSelect,
                      ])}
                      tabIndex={1}
                    >
                      <input
                        className="selectopt"
                        name="perfil"
                        type="radio"
                        onChange={(e) => {
                          selectEvent(
                            'Selecione o seu perfil',
                            'Pessoa Física',
                          );
                          handleChange(e);
                          refProfile.current?.blur();
                          setIsCnpj(false);
                        }}
                        defaultChecked
                        value="pf"
                        id="option-pf"
                      />
                      <label
                        htmlFor="option-pf"
                        className="option"
                      >
                        {'Pessoa Física'}
                      </label>
                      <input
                        className="selectopt"
                        name="perfil"
                        type="radio"
                        onChange={(e) => {
                          selectEvent(
                            'Selecione o seu perfil',
                            'Pessoa Jurídica',
                          );
                          handleChange(e);
                          refProfile.current?.blur();
                          setIsCnpj(true);
                        }}
                        value="pj"
                        id="option-pj"
                      />
                      <label
                        htmlFor="option-pj"
                        className="option"
                      >
                        {'Pessoa Jurídica'}
                      </label>
                    </div>
                  </div>
                </div>
              </InputMsgError>

              {/* CPF/CNPJ */}
              <InputMsgError
                error={!!touched.cpf && !!errors.cpf}
                errorMsc={
                  isCnpj
                    ? formError.INVALID_CNPJ
                    : formError.INVALID_CPF
                }
              >
                <div className={styles.field}>
                  <label htmlFor="cpf">
                    {isCnpj ? 'CNPJ' : 'CPF'}
                  </label>
                  <MaskedInput
                    mask={
                      isCnpj ? inputMasks.cnpj : inputMasks.cpf
                    }
                    type="tel"
                    name="cpf"
                    placeholder={'Escreva o seu CPF ou CNPJ'}
                    id="cpf"
                    className={(!!touched.name && !!errors.name) ? styles.errorActive : "secondary"}
                    value={values.cpf}
                    onBlur={(e) => {
                      if (e.currentTarget.value) {
                        filledEvent('cpf');
                        handleBlur(e);
                      }
                    }}
                    onPaste={(
                      e: ClipboardEvent<HTMLInputElement>,
                    ) => {
                      const value = e?.clipboardData
                        ?.getData('Text')
                        ?.replace(/\D/g, '');
                      if (value) {
                        formik.setFieldValue('cpf', value);
                      }
                    }}
                    onChange={(
                      e: ChangeEvent<HTMLInputElement>,
                    ) => {
                      handleChange(e);
                    }}
                  />
                </div>
              </InputMsgError>

              {/* VERSÃO */}
              <InputMsgError
                error={!!touched.version && !!errors.version}
                errorMsc={errors.version}
              >
                <div
                  className={scssStyles([styles.field])}
                >
                  <label htmlFor="version" className={styles.labelHeader}>
                    {"Seleciona uma versão"}
                  </label>
                  <div
                    ref={refVersion}
                    className={scssStyles([
                      styles.inputSelectHolder,
                      styles.s1,
                    ])}
                    style={{ zIndex: 10 }}
                  >
                    <div className={scssStyles(["select"])} tabIndex={1}>
                      {versionData?.map((version => {
                        return (
                          <React.Fragment key={`version-${version?.id}`}>
                            <input
                              className="selectopt"
                              name="version"
                              type="radio"
                              onChange={async (e) => {
                                selectEvent(
                                  'Selecione uma versão',
                                  version.id,
                                );
                                store.setSelectedVersion(version);
                                setVersionLabelValue(version);
                                handleChange(e);
                                refDealers.current?.blur();
                              }}
                              value={version?.id}
                              id={`option-version-${version?.id}`}
                            />
                            <label
                              htmlFor={`option-version-${version?.id}`}
                              className="option"
                              id={versionLabelValue?.id === version.id ? `${styles.versionLabelSelected}` : ''}
                            >
                              {version.label}
                            </label>
                          </React.Fragment>
                        )
                      }

                      ))}
                    </div>
                  </div>
                </div>
              </InputMsgError>

              {/* CEP */}
              <InputMsgError
                error={!!touched.cep && !!errors.cep}
                errorMsc={errors.cep}
              >
                <div className={styles.field}>
                  <label htmlFor="cep">CEP</label>
                  <MaskedInput
                    id="cep"
                    className={(!!touched.name && !!errors.name) ? styles.errorActive : "secondary"}
                    type="tel"
                    mask={inputMasks.cep}
                    placeholder={'Digite seu CEP'}
                    name="cep"
                    value={values.cep}
                    onBlur={async (e) => {
                      if (e.currentTarget.value) {
                        filledEvent('cep');
                        handleBlur(e);
                        const replacedValue =
                          e.currentTarget.value?.replace(
                            /\D/g,
                            '',
                          );
                        if (replacedValue.length === 8) {
                          fetchDealersViaCep(replacedValue);
                        }
                      }
                    }}
                    onChange={(
                      e: ChangeEvent<HTMLInputElement>,
                    ) => {
                      handleChange(e);
                      const replacedValue =
                        e.currentTarget.value?.replace(
                          /\D/g,
                          '',
                        );
                      if (replacedValue.length === 8) {
                        fetchDealersViaCep(replacedValue);
                      }
                    }}
                  />
                </div>
              </InputMsgError>

              {/* Email */}
              <InputMsgError
                className={styles.emailField}
                error={!!touched.email && !!errors.email}
                errorMsc={errors.email}
              >
                <div className={styles.field}>
                  <label htmlFor="email">{'E-mail'}</label>
                  <input
                    type="email"
                    name="email"
                    placeholder={'nome@email.com'}
                    className={(!!touched.name && !!errors.name) ? styles.errorActive : "secondary"}
                    onBlur={(e) => {
                      if (e.currentTarget.value) {
                        filledEvent('e-mail');
                        handleBlur(e);
                      }
                    }}
                    value={values.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
              </InputMsgError>

              {/* Consulta concessionaria pelo CEP */}
              {(cepFetched && store.dealers.length === 0) ||
                fetchedViaCity ? (
                <>
                  {/* Erro indicando para pesquisar manualmente a cidade */}
                  <h2 className={styles.doubleColumn}>
                    {
                      'Não há concessionária no endereço selecionado.'
                    }
                    {
                      ' Por favor, selecione a cidade mais próxima.'
                    }
                    <br />
                  </h2>

                  {/* Estado */}
                  <InputMsgError
                    error={!!locationError.state}
                    errorMsc={''}
                  >
                    <div className={scssStyles([styles.field])}>
                      <label htmlFor="state">{'ESTADO'}</label>
                      <div className={styles.inputSelectHolder}>
                        <div
                          ref={refDealers}
                          className={scssStyles([
                            'select',
                            styles.inputSelect,
                          ])}
                          tabIndex={1}
                        >
                          <input
                            className="selectopt"
                            name="state"
                            type="radio"
                            onChange={(e) => {
                              selectEvent('estado', '');
                              handleChange(e);
                            }}
                            checked={values.state === ''}
                            value=""
                            id={`option-state-empty`}
                          />
                          <label
                            htmlFor="option-state-empty"
                            className={scssStyles([
                              'option',
                              styles.optionEmpty,
                            ])}
                          >
                            {''}
                          </label>
                          {STATES?.map((state) => (
                            <React.Fragment
                              key={`state-${state}`}
                            >
                              <input
                                className="selectopt"
                                name="state"
                                type="radio"
                                checked={values.state === state}
                                onChange={async (e) => {
                                  handleChange(e);
                                  setFetchingCities(true);
                                  formik.setFieldValue(
                                    'dealer',
                                    '',
                                  );
                                  store.setDealers([]);
                                  const cities =
                                    await getCitiesByState(
                                      state,
                                    );
                                  setFetchingCities(false);
                                  cities &&
                                    store.setCityList(cities);
                                  formik.setFieldValue(
                                    'city',
                                    '',
                                  );
                                  selectEvent('estado', state);
                                }}
                                value={state}
                                id={`option-state-${state}`}
                              />
                              <label
                                htmlFor={`option-state-${state}`}
                                className="option"
                              >
                                {state}
                              </label>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </InputMsgError>

                  {/* Cidade */}
                  <InputMsgError
                    error={!!locationError.state}
                    errorMsc={''}
                  >
                    <div
                      className={scssStyles([
                        styles.field,
                        store.cityList.length === 0
                          ? styles.disabled
                          : '',
                      ])}
                    >
                      <label htmlFor="city">{'CIDADE'}</label>
                      <div className={styles.inputSelectHolder}>
                        <div
                          className={scssStyles([
                            'select',
                            styles.inputSelect,
                            store.cityList.length
                              ? ''
                              : 'disabled',
                          ])}
                          tabIndex={1}
                        >
                          {values.dealer === '' && (
                            <>
                              <input
                                className="selectopt"
                                name="city"
                                type="radio"
                                onChange={(e) => {
                                  selectEvent('cidade', '');
                                  handleChange(e);
                                }}
                                checked={values.city === ''}
                                value=""
                                id={`option-city-empty`}
                              />
                              <label
                                htmlFor="option-city-empty"
                                className={scssStyles([
                                  'option',
                                  styles.optionEmpty,
                                ])}
                              >
                                {fetchingCities && (
                                  <img
                                    src={ui.loading.fullPath}
                                    alt="carregando"
                                    className={styles.loading}
                                  />
                                )}
                                {store.cityList.length
                                  ? ''
                                  : 'Nenhuma concessionária disponível nesse estado.'}
                              </label>
                            </>
                          )}
                          {store.cityList?.map((city) => (
                            <React.Fragment
                              key={`city-${city.cityCode}`}
                            >
                              <input
                                className="selectopt"
                                name="city"
                                type="radio"
                                onChange={async (e) => {
                                  const dealers =
                                    await getDealersByCity(
                                      city.cityCode,
                                    );
                                  if (dealers) {
                                    store.setDealers(dealers);
                                    setFetchedViaCity(true);
                                  }
                                  selectEvent(
                                    'cidade',
                                    city.cityName,
                                  );
                                  handleChange(e);
                                }}
                                checked={
                                  values.city === city.cityCode
                                }
                                value={city.cityCode}
                                id={`option-city-${city.cityCode}`}
                              />
                              <label
                                htmlFor={`option-city-${city.cityCode}`}
                                className="option"
                              >
                                {city.cityName}
                              </label>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </InputMsgError>
                </>
              ) : null}

              {/* Dealer */}
              <InputMsgError
                error={!!touched.dealer && !!errors.dealer}
                errorMsc={errors.dealer}
              >
                <div
                  className={scssStyles([
                    styles.field,
                    store.dealers.length ? '' : styles.disabled,
                  ])}
                >
                  <label htmlFor="dealer">
                    {'Escolha uma Concessionária'}
                  </label>
                  <div className={styles.inputSelectHolder}>
                    <div
                      ref={refDealers}
                      className={scssStyles([
                        'select',
                        styles.inputSelect,
                        store.dealers.length ? '' : 'disabled',
                      ])}
                      tabIndex={1}
                    >
                      {values.dealer === '' && (
                        <>
                          <input
                            className="selectopt"
                            name="dealer"
                            type="radio"
                            onChange={(e) => {
                              selectEvent(
                                'Escolha uma concessionária',
                                '',
                              );
                              handleChange(e);
                            }}
                            checked={values.dealer === ''}
                            value=""
                            id={`option-dealer-empty`}
                          />
                          <label
                            htmlFor="option-dealer-empty"
                            className={scssStyles([
                              'option',
                              styles.optionEmpty,
                            ])}
                          >
                            {fetchingDealers && (
                              <img
                                src={ui.loading.fullPath}
                                alt="carregando"
                                className={styles.loading}
                              />
                            )}
                            {!fetchingDealers &&
                              !!store.dealers.length &&
                              ''}
                            {!fetchingDealers &&
                              !store.dealers.length && (
                                <>
                                  {cepFetched &&
                                    store.dealers.length === 0
                                    ? 'Antes de escolher a concessionária, selecione o local.'
                                    : 'Antes de escolher a concessionária, preencha o CEP'}
                                </>
                              )}
                          </label>
                        </>
                      )}
                      {store.dealers?.map((dealer) => (
                        <React.Fragment key={dealer.id}>
                          <input
                            className="selectopt"
                            name="dealer"
                            type="radio"
                            onChange={(e) => {
                              selectEvent(
                                'Escolha uma concessionária',
                                dealer.name,
                              );
                              refDealers.current?.blur();
                              handleChange(e);
                            }}
                            checked={
                              values.dealer?.toString() ===
                              dealer.id?.toString()
                            }
                            value={dealer.id}
                            id={`option-dealer-${dealer.id}`}
                          />
                          <label
                            htmlFor={`option-dealer-${dealer.id}`}
                            className="option"
                          >
                            {dealer.formattedName}
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </InputMsgError>

              {/* Telefone */}
              <InputMsgError
                error={!!touched.phone && !!errors.phone}
                errorMsc={errors.phone}
              >
                <div
                  className={scssStyles([
                    styles.field,
                    styles.wrapperField,
                  ])}
                >
                  <label htmlFor="phone">{'Telefone'}</label>
                  <div>
                    <input
                      type="tel"
                      name="ddd"
                      placeholder="(00)"
                      className={scssStyles(["secondary", styles.ddd])}
                      value={values.ddd}
                      onBlur={(e: FocusEvent<HTMLInputElement>) => {
                        if (e.currentTarget?.value) {
                          filledEvent("ddd");
                        }
                        handleBlur({ ...e, value: formatDDD(e.currentTarget) });
                      }}
                      onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                        const value = e?.clipboardData
                          ?.getData("Text")
                          ?.replace(/\D/g, "");
                        if (value) {
                          formatDDD(e.currentTarget);
                          if (value.length > 2) {
                            const phoneInput = document.getElementById(
                              "phoneInput"
                            ) as HTMLInputElement;
                            if (phoneInput) {
                              const phoneValue = value
                                .substring(2)
                                .replace(/(\d{5})(\d{0})/g, "$1-")
                                .substring(0, 10);
                              phoneInput.value = phoneValue;
                              formik.setFieldValue("telefone", phoneValue);
                            }
                          }
                        }
                      }}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        handleChange({
                          ...e,
                          value: formatDDD(e.currentTarget),
                        });
                      }}
                    />
                    <MaskedInput
                      mask={inputMasks.phone}
                      type="tel"
                      id="phoneInput"
                      name="phone"
                      placeholder={"Digite um número válido"}
                      className="secondary"
                      value={values.phone}
                      onBlur={(e) => {
                        if (e.currentTarget.value) {
                          filledEvent("telefone");
                          handleBlur(e);
                        }
                      }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </div>
              </InputMsgError>

            </div>
          </Container>
          <Container>
            <div className={styles.formFooter}>
              <InputMsgError
                error={
                  !!touched.aceiteComunicacoes &&
                  !!errors.aceiteComunicacoes
                }
                errorMsc={errors.aceiteComunicacoes}
              >
                <div className={styles.disclaimer}>
                  <input
                    type="checkbox"
                    name="aceiteComunicacoes"
                    value="true"
                    checked={values.aceiteComunicacoes}
                    onClick={() =>
                      clickCheckBox('politica-de-privacidade')
                    }
                    onChange={handleChange}
                    id="aceiteComunicacoes"
                  />
                  <label
                    htmlFor="aceiteComunicacoes"
                    className="padding"
                  >
                    {'Seus dados pessoais poderão ser utilizados pela Fiat e pela Concessionária para fins de envio de comunicações de marketing de produtos e serviços relacionados à Fiat.' +
                      ' A Fiat compartilhará seus dados pessoais com a instituição financeira parceira e com demais empresas do grupo (Jeep, Chrysler, Dogde e Ram) para viabilizar o envio' +
                      ' de uma proposta de financiamento do veículo de seu interesse. Para mais detalhes sobre como desativar o recebimento de comunicações de marketing e outras informações' +
                      ' sobre como a Fiat trata seus dados pessoais, acesse a Política de Privacidade '}

                    <a
                      href={links.privacy}
                      onClick={() => {
                        DataLayer.clickEvent({
                          pageSection: 'formulario',
                          pageSubsection: 'lead-cadastro',
                          element: 'politica-de-privacidade',
                          elementCategory: 'link',
                        });
                      }}
                      onAuxClick={() => {
                        DataLayer.clickEvent({
                          pageSection: 'formulario',
                          pageSubsection: 'lead-cadastro',
                          element: 'politica-de-privacidade',
                          elementCategory: 'link',
                        });
                      }}
                      title="Política de Privacidade"
                      target="_blank"
                    >
                      {'Disponível Aqui'}
                    </a>
                    {'.'}
                    <br />
                  </label>
                </div>
              </InputMsgError>
              <div
                className={scssStyles([
                  'div_primary',
                  styles.buttonContainer,
                ])}
              >
                <Button
                  content={
                    <>
                      {sending ? (
                        <Spinner scale={0.6} />
                      ) : (
                        <>
                          <CTAButton
                            classNameAux={styles.formButton}
                            text={"Cadastrar"}
                            title={"Cadastrar"}
                          // iconCode={item.iconCode}
                          />
                        </>
                      )}
                    </>
                  }
                  title="Enviar"
                  disabled={sending}
                  isSubmit
                />

              </div>
            </div>
          </Container>
        </FormikProvider>
      </form>
      {modalSuccess && (
        <ModalOfForm
          show={modalSuccess}
          className={styles.modal}
          pageSection="formulario"
          pageSubsection="lead-cadastro"
          success
          message={SUCCESS_MESSAGE}
          handleClose={() => {
            setModalSuccess(false);
          }}
        />
      )}

      {modalError && (
        <ModalOfForm
          show={modalError}
          className={styles.modal}
          pageSection="formulario"
          pageSubsection="lead-cadastro"
          message={FAIL_MESSAGE}
          handleClose={() => {
            setModalError(false);
          }}
        />
      )}
    </SectionElement>
  );
});

export default Form;
