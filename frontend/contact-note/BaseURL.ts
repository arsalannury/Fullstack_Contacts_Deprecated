import axios, { AxiosInstance } from "axios";

export const BaseURL: AxiosInstance = axios.create({
  baseURL: "https://localhost:8000",
});
