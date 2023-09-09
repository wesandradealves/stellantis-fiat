import { LeadToBeSent } from "@/models";
import axios from "axios";

export const postLead = async (lead: LeadToBeSent): Promise<boolean> => {
  try {
    const response = await axios.post(`${process.env.BASE_PREFIX}send/`, (new URLSearchParams(lead as unknown as Record<string, string>)).toString());
    if (response?.data?.status === 'success' || response?.data?.includes('success')) return true;
    return false;
  } catch (error) {
    return false;
  }
}

export const verifyCaptcha = async (token: string): Promise<boolean> => {
  try {
    const response = await axios.post(`${process.env.BASE_PREFIX}send/captcha/`, (new URLSearchParams({ response: token } as unknown as Record<string, string>)).toString());
    if (response.data && response.data.includes('ok')) return true;
    return false;
  } catch (error) {
    return false;
  }
};

export const validateCep = async (cep: string): Promise<boolean> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`);
    if (response.data && !response.data['erro']) return true;
    return false;
  } catch (error) {
    return false;
  }
}
