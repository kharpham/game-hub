import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "45f4caf2be544b67bdacd27d3c96d7f5",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
  getAllGame(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data.results);
  }
}
