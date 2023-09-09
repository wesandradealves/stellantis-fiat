import axios from "axios";

const api = axios.create({
  baseURL: "https://lead.fcalatam.com.br",
});

const post = (url: string, data: any) =>
  api.post(url, data).then((response) => response.data);

const LeadsService = {
  postLeads(data: any) {
    return post("HubMicroservices", data);
  },
};

export default LeadsService;
