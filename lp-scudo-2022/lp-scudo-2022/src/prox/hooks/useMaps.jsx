import axios from 'axios';

const api = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/distancematrix',
});
export const useMaps = () => ({
  maps: async (origin, destiny) => {
    const response = await api.get(
      `/json?origins=${origin}&destinations=${destiny}&key=AIzaSyCiX2N8EtI4fhDdWWjktKrjE2iiYH4X0_8`,
    );
    return response.data;
  },
});

// API DEFINITIVA OFICIAL: https://maps.googleapis.com/maps/api/distancematrix
// KEY Google: AIzaSyCiX2N8EtI4fhDdWWjktKrjE2iiYH4X0_8

// Outra API que funciona enquanto não fornecerem a KEY do google 'https://api.distancematrix.ai/maps/api/distancematrix'
// key=3myONnjQq8q7pgP4vokbNDlR2wr2q
