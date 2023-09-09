import axios from "axios";

const api = axios.create({
  baseURL: "https://offer-service.k8s.fcalatam.com.br",
});

const post = (url: string) => api.post(url).then((response) => response.data);
const get = (url: string) => api.get(url).then((response) => response.data);

const OfferService = {
  getOffer(cityCode: string) {
    return get(`/dealer?cities=${cityCode}&brandName=FIAT`);
  },
};

export default OfferService;
