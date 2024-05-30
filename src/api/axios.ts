import { Axios } from "axios";

export const axiosInstance = new Axios({
  baseURL: "http://localhost:8080",
});
