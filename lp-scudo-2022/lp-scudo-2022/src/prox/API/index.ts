import { IDealer, ILocation } from "@/prox/models";
import axios from "axios";

export interface LeadToBeSentFragment {
  utm_source: string,
  utm_medium: string,
  utm_campaign: string,
  utm_content: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  cpf: string,
  message: string,
  enableMsgPhone: boolean,
  enableMsgEmail: boolean,
  uf: string,
  cidade: string,
  dealersCode: string,
  ObservacaoCliente__c: string,
  productCode: string,
  msc_modelo: string  | undefined,
  msc_serie: string  | undefined,
  msc_versao: string  | undefined
}

export interface LeadToBeSent extends LeadToBeSentFragment {
  callback: 'JSONPCallback',
  origin: 'site',
  SubOrigem__c: 'Brand Web Site',
  form: 'Proposal',
  retUrl: string,
  country: 'Brasil',
  productGroup: 'Vendas',
  referer: string,
  term: string,
  description: '',
  google_client_id: string,
  _: '',
  productCode: 'PU00001',
  gaclientid: string,
  hasSendToEmail: boolean,
  msc_ano_modelo: '2023',
  msc_modelo: string | undefined,
  msc_versao: string | undefined,
  msc_serie: string | undefined,
  brand: 'fiat',
  leadType: 'DEFAULT',
}


export const postLead = async (lead: LeadToBeSentFragment): Promise<boolean> => {
  try {
    const response = await axios.post('https://lead.fcalatam.com.br/HubMicroservices',
        {
          ...lead,
          callback: 'JSONPCallback',
          origin: 'site',
          SubOrigem__c: 'Brand Web Site',
          form: 'Proposal',
          retUrl: location.href,
          country: 'Brasil',
          productGroup: 'Vendas',
          referer: location.href,
          term: '',
          description: '',
          google_client_id: (document.cookie.match(/\b_gid=([^;]*)/) || [])[1] || '',
          _: '',
          gaclientid: (document.cookie.match(/\b_ga=([^;]*)/) || [])[1] || '',
          hasSendToEmail: false,
          msc_ano_modelo: '2023',
          brand: 'fiat',
          leadType: 'DEFAULT',
        } as LeadToBeSent);
    if (response?.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

interface CepInfo {
  success: boolean;
  location?: ILocation;
}

const getUrl = (prefix: string, action: string) => `https://${prefix}-service.k8s.fcalatam.com.br${prefix === 'mvs' ? ':443' : ''}/${action}`;

export const getCepInfo = async (cep: string): Promise<CepInfo> => {
  try {
    const response = await axios.get(`https://location-service-release.tasks.k8s.fcagil.avenuecode.com:443/cep/${cep}`);
    if (response?.status === 200) {
      const { data } = response;
      const { cityCode, stateCode, cityName } = data;
      if (cityCode && stateCode && cityName) {
        return {
          location: {
            cep, 
            cityCode,
            stateCode,
            cityName,
          },
          success: true,
        }
      }
    }
    return {
      success: false,
    }
  } catch (error) {
    return {
      success: false,
    }
  }
}

export const getDealers = async (location: ILocation): Promise<IDealer[] | null> => {
  try {
    const queryString = new URLSearchParams({ cities: location.cityCode, brandName: 'FIAT' });
    const response = await axios.get(`${getUrl('offer', 'dealer')}?${queryString.toString()}`);
    if (response?.status === 200 && response?.data) {
      const dealers = response.data as IDealer[];
      return dealers.map((d) => ({
        ...d,
        formattedName: d.fantasyName.split('-').join(' - '),
      }));
    }
    return null;
  } catch (error) {
    return null;
  }
}

export const getCitiesByState = async (state: string): Promise<ILocation[] | null> => {
  try {
    const queryString = new URLSearchParams({ brandName: 'FIAT' });
    const url = `https://dealer-service.k8s.fcalatam.com.br/dealerws/influencearea/state/${state}/city/?${queryString.toString()}`;
    const response = await axios.get(url);
    if (response?.status === 200 && response?.data) {
      const cities = response.data as ILocation[];
      return cities;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export const getDealersByCity = async (cityCode: string): Promise<IDealer[] | null> => {
  try {
    const queryString = new URLSearchParams({ brandName: 'FIAT', cities: cityCode });
    const url = `https://offer-service.k8s.fcalatam.com.br/dealer?${queryString.toString()}`;
    const response = await axios.get(url);
    if (response?.status === 200 && response?.data) {
      const dealers = response.data as IDealer[];
      return dealers.map((d) => ({
        ...d,
        formattedName: d.fantasyName.split('-').join(' - '),
      }));
    }
    return null;
  } catch (error) {
    return null;
  }
}
