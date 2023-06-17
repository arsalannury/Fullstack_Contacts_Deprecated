import axios, { AxiosInstance } from "axios";

export const BaseURL: AxiosInstance = axios.create({
  baseURL: "localhost:8000",
});
