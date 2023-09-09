import axios from "axios";

const api = axios.create({
  baseURL: "https://location-service-release.tasks.k8s.fcagil.avenuecode.com",
});

const get = (url: string) => api.get(url).then((response) => response.data);

const LocationService = {
  getLocation(cep: string) {
    return get(`/cep/${cep}`);
  },
};

export default LocationService;
