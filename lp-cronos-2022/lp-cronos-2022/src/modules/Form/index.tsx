import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validateCPF, validateCNPJ } from "validations-br";
import * as Yup from "yup";
import { useRouter } from "next/router";

import { Input, Select, FormButton } from "../../components";

import { dataLayer } from "../../libs/gtm";
import {
  onlyNumber,
  cpfMask,
  cnpjMask,
  cepMask,
  phoneMask,
  getLastFirstName,
  getVersion,
  getPath,
  slugify,
  removeFakeData,
  validateName,
  getRefQueryParam,
} from "../../utils";
import {
  LocationService,
  DealerService,
  OfferService,
  LeadsService,
} from "../../services";
import { FormProps } from "../../interfaces";

import { ufData, listVersionData } from "../../api";

import styles from "./styles.module.scss";

const Form = ({ setShowFeedback }: FormProps) => {
  const router = useRouter();

  const [location, setLocation] = useState<any>({});
  const [showCityUf, setShowCityUf] = useState<boolean>(false);
  const [dealers, setDealers] = useState<any>([]);
  const [dealersNormalize, setDealersNormalizer] = useState<any>([]);
  const [citiesNormalize, setCitiesNormalizer] = useState<any>([]);
  const [city, setCity] = useState<any>([]);

  const initialValues = {
    SubOrigem__c: "Brand Web Site",
    brand: "fiat",
    form: "Proposal",
    enableMsgEmail: false,
    enableMsgPhone: false,
    hasSendToEmail: false,
    getclientid:
      (typeof window !== "undefined" &&
        (document.cookie.match(/\b_ga=([^;]*)/) || [])[1]) ||
      "",
    google_client_id:
      (typeof window !== "undefined" &&
        (document.cookie.match(/\b_gid=([^;]*)/) || [])[1]) ||
      "",
    leadType: "DEFAULT",
    origin: "site",
    productGroup: "Vendas",
    referer: "https://cronos.fiat.com.br/agende/",
    retUrl: "https://cronos.fiat.com.br/agende/",
    county: "",
    cidade: "",
    uf: "",
    cpf: "",
    description: "",
    email: "",
    firstName: "",
    lastName: "",
    Campaign: getRefQueryParam("utm_campaign"),
    Content: getRefQueryParam("utm_content"),
    Medium: getRefQueryParam("utm_medium"),
    Source: getRefQueryParam("utm_source"),
    Term: getRefQueryParam("utm_term"),
    msc_modelo: "",
    msc_versao: "",
    msc_serie: "",
    msc_ano: "",
    dealersCode: "",
    phone: "",
    productCode: "",
    message: "",
    cep: "",
    accept: false,
    profile: "pf",
    version: "",
    _: "",
    fake_name: "",
    fake_cpf: "",
    fake_cnpj: "",
    fake_ddd: "",
    fake_phone: "",
  };

  const profileData = [
    {
      label: "Pessoa Física",
      value: "pf",
    },
    {
      label: "Pessoa Jurídica",
      value: "pj",
    },
  ];

  const LeadFormSchema = Yup.object().shape({
    fake_name: Yup.string()
      .required("* Campo obrigatório")
      .test(
        "name-valid",
        "Pelo menos 3 letras no nome e sobrenome",
        (value: string | undefined) => validateName(value ? value : "")
      ),
      fake_cpf: Yup.string().when("profile", {
        is: "pf",
        then: Yup.string()
          .required("* Campo obrigatório")
          .test("is-cpf", "CPF inválido", (value: string | undefined) =>
            validateCPF(value ? value : "")
          ),
      }),
      fake_cnpj: Yup.string().when("profile", {
        is: "pj",
        then: Yup.string()
          .required("* Campo obrigatório")
          .test("is-cnpj", "CNPJ inválido", (value: string | undefined) =>
            validateCNPJ(value ? value : "")
          ),
      }),
    cep: Yup.string().required("* Campo obrigatório"),
    version: Yup.string().required("* Campo obrigatório"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("* Campo obrigatório"),
    dealersCode: Yup.string().required("* Campo obrigatório"),
    fake_ddd: Yup.string().required("*"),
    fake_phone: Yup.string().required("* Campo obrigatório"),
    uf: Yup.string().required("* Campo obrigatório"),
    cidade: Yup.string().required("* Campo obrigatório"),
    accept: Yup.boolean().oneOf([true], "* Campo obrigatório"),
  });

  useEffect(() => {
    const { cityCode, cityName, countryName, stateCode, postalCode } = location;

    if (cityCode) {
      formik.setValues((values) => ({
        ...values,
        county: countryName,
        cidade: cityName,
        uf: stateCode,
        cep: postalCode,
      }));

      if (cityCode) {
        OfferService.getOffer(cityCode).then((offer) => {
          if (offer.length <= 0) {
            setDealers([]);
            setShowCityUf(true);
          } else {
            setDealers(offer);
            setShowCityUf(false);
          }
        });
      }
    }
  }, [location]);

  useEffect(() => {
    let objDealer = [
      {
        label: "",
        value: "",
      },
    ];
    dealers.map((item: { fantasyName: string; dealerCode: string }) => {
      objDealer.push({
        label: item.fantasyName,
        value: item.dealerCode,
      });
    });
    setDealersNormalizer(
      dealers.length > 0
        ? objDealer
        : [
            {
              label: "Selecione",
              value: "",
            },
          ]
    );
  }, [dealers]);

  useEffect(() => {
    let objCities = [
      {
        label: "",
        value: "",
      },
    ];
    city.map((item: { cityName: string; cityCode: string }) => {
      objCities.push({
        label: item.cityName,
        value: item.cityCode,
      });
    });
    setCitiesNormalizer(city.length > 0 ? objCities : []);
  }, [city]);

  const handleSubmit = () => {
    const values = removeFakeData(formik.values);
    LeadsService.postLeads(values)
      .then((resp) => {
        formik.resetForm();
        setShowFeedback("success");
        handleDataLayer({
          elementCategory: "submit-success",
          interactionType: "abrir",
          element: "sucesso",
        });
      })
      .catch(() => {
        setShowFeedback("error");
        handleDataLayer({
          elementCategory: "submit-error",
          interactionType: "abrir",
          element: "algo-deu-errado-ao-enviar-seus-dados",
        });
      });
  };

  const formik = useFormik({
    validationSchema: LeadFormSchema,
    enableReinitialize: true,
    initialValues,
    onSubmit: handleSubmit,
  });

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "cronos",
      pageSection: "formulario",
      pageSubsection: "lead-cadastro",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Input
              name="fake_name"
              id="fake_name"
              label="Nome Completo"
              placeholder="Escreva o seu nome completo"
              onChange={formik.handleChange}
              onBlur={(e) => {
                if (e.currentTarget.value !== "") {
                  handleDataLayer({
                    elementCategory: e.target.type,
                    interactionType: "preencheu",
                    element: slugify("Nome Completo"),
                  });
                }
                let { first, last } = getLastFirstName(e.currentTarget.value);
                first !== "" && formik.setFieldValue("firstName", first);
                last !== "" && formik.setFieldValue("lastName", last);
              }}
              error={formik.touched.fake_name && formik.errors.fake_name}
            />
          </div>
          <div className={styles.col}>
            <Select
              name="profile"
              id="profile"
              label="Selecione o seu perfil"
              data={profileData}
              onChange={(e) => {
                handleDataLayer({
                  elementCategory: "select",
                  interactionType: "selecao",
                  element: slugify("Selecione o seu perfil"),
                  selectedValue: e.currentTarget.value,
                });
                formik.setValues((values) => ({
                  ...values,
                  fake_cnpj: "",
                  fake_cpf: "",
                  cpf: "",
                  profile: e.currentTarget.value,
                }));
              }}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            {formik.values.profile === "pf" ? (
              <Input
                name="fake_cpf"
                id="fake_cpf"
                label="CPF"
                type="tel"
                placeholder="Escreva o seu CPF"
                value={cpfMask(formik.values.fake_cpf)}
                onChange={(e) =>
                  formik.setValues((values) => ({
                    ...values,
                    fake_cpf: onlyNumber(e.currentTarget.value),
                    cpf: onlyNumber(e.currentTarget.value),
                  }))
                }
                onBlur={(e) => {
                  if (e.currentTarget.value !== "") {
                    handleDataLayer({
                      elementCategory: e.target.type,
                      interactionType: "preencheu",
                      element: slugify("CPF"),
                    });
                  }
                }}
                error={formik.touched.fake_cpf && formik.errors.fake_cpf}
                maxLength={14}
              />
            ) : (
              <Input
                name="fake_cnpj"
                id="fake_cnpj"
                label="CNPJ"
                type="tel"
                placeholder="Escreva o seu CNPJ"
                value={cnpjMask(formik.values.fake_cnpj)}
                onChange={(e) => {
                  formik.setValues((values) => ({
                    ...values,
                    fake_cnpj: onlyNumber(e.currentTarget.value),
                    cpf: onlyNumber(e.currentTarget.value),
                  }));
                }}
                onBlur={(e) => {
                  if (e.currentTarget.value !== "") {
                    handleDataLayer({
                      elementCategory: e.target.type,
                      interactionType: "preencheu",
                      element: slugify("CNPJ"),
                    });
                  }
                }}
                error={formik.touched.fake_cnpj && formik.errors.fake_cnpj}
                maxLength={18}
              />
            )}
          </div>
          <div className={styles.col}>
            <Select
              name="version"
              id="version"
              label="Selecione uma versão"
              data={listVersionData}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const version = getVersion(value);
                if (value !== "") {
                  const itemSelected = listVersionData.find(
                    (item) => item.value === e.currentTarget.value
                  );
                  handleDataLayer({
                    elementCategory: "select",
                    interactionType: "selecao",
                    element: slugify("Selecione uma versão"),
                    selectedValue: itemSelected
                      ? slugify(itemSelected?.label)
                      : "",
                  });
                }
                formik.setValues((values) => ({
                  ...values,
                  msc_ano: version.ano,
                  msc_modelo: version.modelo,
                  msc_serie: version.serie,
                  msc_versao: version.versao,
                  productCode: `${version.modelo}${version.versao}${version.serie}`,
                  version: value,
                }));
              }}
              error={formik.touched.version && formik.errors.version}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Input
              name="cep"
              id="cep"
              label="CEP"
              type="tel"
              placeholder="Digite seu CEP"
              value={cepMask(formik.values.cep)}
              onChange={formik.handleChange}
              onBlur={(e) => {
                if (e.currentTarget.value !== "") {
                  handleDataLayer({
                    elementCategory: e.target.type,
                    interactionType: "preencheu",
                    element: slugify("CEP"),
                  });
                }
                LocationService.getLocation(
                  onlyNumber(e.currentTarget.value)
                ).then((data) => {
                  setLocation(data);
                });
              }}
              error={formik.touched.cep && formik.errors.cep}
              maxLength={9}
            />
          </div>
          <div className={styles.col}>
            <Input
              name="email"
              id="email"
              label="E-mail"
              type="mail"
              placeholder="Escreva seu e-mail"
              onChange={formik.handleChange}
              onBlur={(e) => {
                if (e.currentTarget.value !== "") {
                  handleDataLayer({
                    elementCategory: e.target.type,
                    interactionType: "preencheu",
                    element: slugify("E-mail"),
                  });
                }
              }}
              error={formik.touched.email && formik.errors.email}
            />
          </div>
        </div>
        {showCityUf && (
          <div className={styles.row}>
            <div className={styles.col}>
              <Select
                name="uf"
                id="uf"
                label="Estado"
                data={ufData}
                onChange={(e) => {
                  let { value } = e.currentTarget;
                  if (value !== "") {
                    const itemSelected = ufData.find(
                      (item) => item.value === e.currentTarget.value
                    );
                    handleDataLayer({
                      elementCategory: "select",
                      interactionType: "selecao",
                      element: slugify("Estado"),
                      selectedValue: itemSelected
                        ? slugify(itemSelected?.label)
                        : "",
                    });
                  }
                  formik.setFieldValue("uf", value);
                  setDealers([]);
                  DealerService.getCities(value).then((data) => {
                    setCity(data);
                  });
                }}
                error={formik.touched.uf && formik.errors.uf}
              />
            </div>
            <div className={styles.col}>
              <Select
                name="cidade"
                id="cidade"
                label="Cidade"
                data={citiesNormalize}
                onChange={(e) => {
                  const { value } = e.currentTarget;
                  if (value !== "") {
                    const itemSelected = citiesNormalize.find(
                      (item: any) => item.value === e.currentTarget.value
                    );
                    handleDataLayer({
                      elementCategory: "select",
                      interactionType: "selecao",
                      element: slugify("Cidade"),
                      selectedValue: itemSelected
                        ? slugify(itemSelected?.label)
                        : "",
                    });
                  }
                  let selected = citiesNormalize.find(
                    (item: { value: string }) =>
                      item.value === e.currentTarget.value
                  );
                  formik.setFieldValue("cidade", e.currentTarget.value);
                  setDealers([]);
                  OfferService.getOffer(selected.value).then((offer) => {
                    setDealers(offer);
                  });
                }}
                error={formik.touched.cidade && formik.errors.cidade}
                disabled={!citiesNormalize.length}
              />
            </div>
          </div>
        )}
        <div className={styles.row}>
          <div className={styles.col}>
            {dealersNormalize && (
              <Select
                name="dealersCode"
                id="dealersCode"
                label="Escolha uma Concessionária"
                data={dealersNormalize}
                disabled={!dealersNormalize.length}
                onChange={(e) => {
                  const { value } = e.currentTarget;
                  if (value !== "") {
                    handleDataLayer({
                      elementCategory: "select",
                      interactionType: "selecao",
                      element: slugify("Escolha uma Concessionária"),
                      selectedValue: e.currentTarget.value,
                    });
                  }
                  formik.handleChange(e);
                }}
                error={formik.touched.dealersCode && formik.errors.dealersCode}
              />
            )}
          </div>
          <div className={styles.col}>
            <Input
              name="fake_ddd"
              id="fake_ddd"
              label="Telefone"
              type="tel"
              onChange={formik.handleChange}
              onBlur={(e) => {
                if (e.currentTarget.value !== "") {
                  handleDataLayer({
                    elementCategory: e.target.type,
                    interactionType: "preencheu",
                    element: slugify("DDD"),
                  });
                }
                formik.setValues((values) => ({
                  ...values,
                  phone: onlyNumber(
                    `${formik.values.fake_ddd}${formik.values.fake_phone}`
                  ),
                }));
              }}
              error={formik.touched.fake_ddd && formik.errors.fake_ddd}
              maxLength={2}
              small
            />
            <Input
              name="fake_phone"
              id="fake_phone"
              type="tel"
              label="&nbsp;"
              value={phoneMask(formik.values.fake_phone)}
              onChange={formik.handleChange}
              onBlur={(e) => {
                if (e.currentTarget.value !== "") {
                  handleDataLayer({
                    elementCategory: e.target.type,
                    interactionType: "preencheu",
                    element: slugify("Telefone"),
                  });
                }
                formik.setValues((values) => ({
                  ...values,
                  phone: onlyNumber(
                    `${formik.values.fake_ddd}${formik.values.fake_phone}`
                  ),
                }));
              }}
              error={formik.touched.fake_phone && formik.errors.fake_phone}
              maxLength={10}
            />
          </div>
        </div>
        <div className={styles.bottomForm}>
          <div className={styles.containerCheckbox}>
            <div
                className={`${styles.checkbox} ${
                  formik.errors.accept && formik.touched.accept
                    ? styles.error
                    : ""
                }`}
              >
              <input
                type="checkbox"
                name="accept"
                id="accept"
                checked={formik.values.accept}
                onChange={(e) => {
                  handleDataLayer({
                    elementCategory: "checkbox",
                    interactionType: "clique",
                    element: "termo-de-aceite",
                  });
                  formik.setValues((values) => ({
                    ...values,
                    accept: e.currentTarget.checked,
                    enableMsgEmail: e.currentTarget.checked,
                    enableMsgPhone: e.currentTarget.checked,
                    hasSendToEmail: e.currentTarget.checked,
                  }));
                }}
              />
              <label htmlFor="accept">
                <span>
                  Seus dados pessoais poderão ser utilizados pela Fiat e pela
                  Concessionária para fins de envio de comunicações de marketing
                  de produtos e serviços relacionados à Fiat. A Fiat
                  compartilhará seus dados pessoais com a instituição financeira
                  parceira e com demais empresas do grupo (Jeep, Chrysler, Dogde
                  e Ram) para viabilizar o envio de uma proposta de
                  financiamento do veículo de seu interesse. Para mais detalhes
                  sobre como desativar o recebimento de comunicações de
                  marketing e outras informações sobre como a Fiat trata seus
                  dados pessoais, acesse a Política de Privacidade{" "}
                  <a
                    href="https://www.fiat.com.br/politica-de-privacidade.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Disponível Aqui.
                  </a>
                </span>
              </label>
            </div>
            <FormButton
              onClick={() => {
                if (formik.isValid) {
                  handleDataLayer({
                    elementCategory: "submit",
                    interactionType: "clique",
                    element: "cadastrar",
                  });
                }
              }}
            >
              Cadastrar
            </FormButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
