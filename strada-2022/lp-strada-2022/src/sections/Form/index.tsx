import { ChangeEvent, ClipboardEvent, FC, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import { useFormik, FormikProvider } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-text-mask';
import { LeadToBeSent } from "@/models";
import { postLead, verifyCaptcha } from "@/API";
import { Button, ContainerBody, InputMscError, ModalOfForm, Spinner } from '@/components/';
import ReCAPTCHA from 'react-google-recaptcha';
import { formError, inputMasks } from "@/constants";
import validCPF from "@/utils/validCpf";
import scssStyles from "@/utils/scssStyles";
import StradaStore from "@/store/StradaStore";
import { useMobxStores } from "@/store";

const SUCCESS_MESSAGE = 'Formulário enviado com sucesso!';
const FAIL_MESSAGE = 'Ops! Parece que alguma coisa deu errado. Revise todos os campos e tente de novo.';

const Form: FC = () => {
  const store: StradaStore = useMobxStores();
  const [token, setToken] = useState('');
  const [sending, setSending] = useState(false);
  const [invalidRecaptcha, setInvalidRecaptcha] = useState(false);
  const aceiteComunicacoesRef = useRef<HTMLDivElement>(null);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);

  const validationSchema = yup.object({
    name: yup
      .string()
      .required(formError.REQUIRED_FIELD),
    sobrenome: yup
      .string()
      .required(formError.REQUIRED_FIELD),
    cpf: yup
      .string()
      .required(formError.REQUIRED_FIELD)
      .test('validateCpfCnpj', formError.INVALID_CPF, (value) => validCPF(value ?? '')),
    email: yup
      .string()
      .email(formError.INVALID_EMAIL)
      .required(formError.REQUIRED_FIELD),
    aceiteComunicacoes: yup
      .string()
      .required(formError.CHECK_TERMS)
      .oneOf(['true'], formError.CHECK_TERMS),
  });

  const handleRecaptcha = (token: string | null) => {
    if (token) setToken(token);
  }

  const handleSucess = () => {
    setModalSuccess(true);
  }

  const handleError = () => {
    setModalError(true);
  }

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
      name: '',
      email: '',
      telefone: '',
      cpf: '',
      comentario: '',
      tipoCliente: 'F',
      cidade: '',
      aceiteComunicacoes: false,
      aceitePrivacidade: false,
      flagEmail: false,
      flagSms: false,
      flagTelefone: false,
      flagWhatsapp: false,
    } as LeadToBeSent & { name: string },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setModalError(false);
      setModalError(false);
      if (!values.aceiteComunicacoes) {
        (aceiteComunicacoesRef?.current as HTMLDivElement)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      if (!token) {
        setInvalidRecaptcha(true);
        return;
      }
      setSending(true);

      const captchaValid = await verifyCaptcha(token);

      if (!captchaValid) {
        setInvalidRecaptcha(true);
        setSending(false);
        return;
      }

      const fullName = values.name.split(' ');
      const nome = fullName.shift();
      const response = await postLead({
        utmCampaign: '',
        utmContent: '',
        utmMedium: '',
        utmSource: 'site',
        aceiteComunicacoes: values.aceiteComunicacoes,
        aceitePrivacidade: values.aceiteComunicacoes,
        flagEmail: values.flagEmail,
        flagSms: values.flagSms,
        flagWhatsapp: values.flagWhatsapp,
        flagTelefone: values.flagTelefone,
        tipoCliente: 'F',
        cpf: values.cpf,
        nome: nome ?? '',
        sobrenome: fullName.join(' '),
        tipo: 'P',
        email: values.email,
        telefone: values.telefone,
        cep: '',
        uf: '',
        cidade: values.cidade,
        comentario: values.comentario,
        lcdv: '',
        versaoInteresse: '',
        modeloInteresse: '',
        nomeConcessionario: '',
        concessionario: '',
      });
      if (response) {
        formik.resetForm();
        handleSucess();
      } else {
        handleError();
      }
      setSending(false);
    }
  });

  useEffect(() => {
    if (isSubmitting && !isValidating) {
      const keys = Object.keys(errors);
      if (keys.length > 0) {
        const selector = `[name=${keys[0]}]`;
        const errorElement = document.querySelector(selector) as HTMLElement;
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setModalError(true);
        }
      }
    }
  }, [errors, isSubmitting, isValidating]);

  return (
    <section
      ref={(ref) => store.setFormSection(ref)}
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
          <div>
            <ContainerBody>
              <h2>
                {'Preencha o formulário abaixo e prepare-se para se surpreender com todos os detalhes da sua próxima Nova Fiat Strada.'}
              </h2>
              <br /><br />
              <h2>
                {'Fique tranquilo, um de nossos vendedores entrará em contato com você.'}
              </h2>
              <div className={styles.mainFields}>
                <InputMscError
                  error={!!touched.name && !!errors.name}
                  errorMsc={errors.name}
                >
                  <div className={styles.field}>
                    <label htmlFor="name">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="secondary"
                      value={values.name}
                      onBlur={(e) => {
                        if (e.currentTarget.value) {
                          handleBlur(e)
                        }
                      }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </InputMscError>

                <InputMscError
                  error={!!touched.sobrenome && !!errors.sobrenome}
                  errorMsc={errors.sobrenome}
                >
                  <div className={styles.field}>
                    <label htmlFor="sobrenome">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      name="sobrenome"
                      className="secondary"
                      value={values.sobrenome}
                      onBlur={(e) => {
                        if (e.currentTarget.value) 
                        handleBlur(e);
                      }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </InputMscError>

                <InputMscError
                  error={!!touched.cpf && !!errors.cpf}
                  errorMsc={errors.cpf}
                >
                  <div className={styles.field}>
                    <label htmlFor="cpf">
                      CPF
                    </label>
                    <MaskedInput
                      mask={inputMasks.cpf}
                      type="tel"
                      name="cpf"
                      id="cpf"
                      className="secondary"
                      value={values.cpf}
                      onBlur={(e) => {
                        if (e.currentTarget.value){
                          handleBlur(e);
                        }
                      }}
                      onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                        const value = e?.clipboardData?.getData('Text')?.replace(/\D/g, '');
                        if (value) formik.setFieldValue('cpf', value);
                      }}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </InputMscError>

                <InputMscError
                  error={!!touched.telefone && !!errors.telefone}
                  errorMsc={errors.telefone}
                >
                  <div className={styles.field}>
                    <label htmlFor="telefone">
                      Telefone
                    </label>
                    <MaskedInput
                      mask={inputMasks.phone}
                      type="tel"
                      name="telefone"
                      className="secondary"
                      value={values.telefone}
                      onBlur={(e) => {
                        if (e.currentTarget.value) {
                          handleBlur(e);
                        }
                      }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </InputMscError>

                <InputMscError
                  error={!!touched.email && !!errors.email}
                  errorMsc={errors.email}
                >
                  <div className={styles.field}>
                    <label htmlFor="email">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="secondary"
                      onBlur={(e) => {
                        if (e.currentTarget.value) {
                          handleBlur(e);
                        }
                      }}
                      value={values.email}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </InputMscError>

                <InputMscError
                  error={!!touched.cep && !!errors.cep}
                  errorMsc={errors.cep}
                >
                  <div className={styles.field}>
                    <label htmlFor="cep">
                      CEP
                    </label>
                    <MaskedInput
                      mask={inputMasks.cep}
                      name="cep"
                      className="secondary"
                      value={values.cep}
                      onBlur={(e) => {
                        if (e.currentTarget.value) {
                          handleBlur(e);
                        }
                      }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </InputMscError>

              </div>
            </ContainerBody>
          </div>

          <ContainerBody>
            {!!process.env.RECAPTCHA_KEY && (
              <div className={styles.recaptchaContainer}>
                <InputMscError
                  error={invalidRecaptcha}
                  errorMsc={formError.INVALID_RECAPTCHA}
                >
                  <ReCAPTCHA
                    sitekey={process.env.RECAPTCHA_KEY}
                    onChange={handleRecaptcha}
                  />
                </InputMscError>
              </div>
            )}
            <div className={scssStyles(['div_primary', styles.buttonContainer])}>
              <Button
                content={(
                  <>
                    {sending ? (
                      <Spinner scale={0.6} />
                    ) : 'Enviar'}
                  </>
                )}
                title="Enviar"
                disabled={sending}
                isSubmit
              />
            </div>
          </ContainerBody>
        </FormikProvider>
      </form>
      {modalSuccess && (
        <ModalOfForm
          show={modalSuccess}
          className={styles.modal}
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
          message={FAIL_MESSAGE}
          handleClose={() => {
            setModalError(false);
          }}
        />

      )}
    </section>
  )
};

export default Form;