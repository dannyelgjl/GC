import axios from "axios";

const api = axios.create({
  baseURL: "https://5ee78effffee0c0016a1248e.mockapi.io/api/v1/",
});

export default api;
