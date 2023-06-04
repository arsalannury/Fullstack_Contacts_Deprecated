import axios, { AxiosInstance } from "axios";

export const BaseURL: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});
