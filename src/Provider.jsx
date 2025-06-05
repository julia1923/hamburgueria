import axios from "axios"; // Classe que "chama" a API (MockAPI)

export const api = axios.create({
  baseURL: 'https://68408ae65b39a8039a586b91.mockapi.io/api',
  timeout: 5000,
});