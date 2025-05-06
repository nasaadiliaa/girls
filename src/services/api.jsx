import axios from "axios";

export const getBerita = () => {
  return axios.get("http://localhost:8000/api/berita");
};
