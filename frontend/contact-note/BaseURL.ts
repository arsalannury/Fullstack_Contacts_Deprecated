import axios, { AxiosInstance } from "axios";

export const BaseURL: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
