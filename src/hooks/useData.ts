import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface FetchResponse<T> {
    count: number,
    results: T[],
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig,  deps?: any) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(_ => true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res: any) => {
            setData(_ => res.data.results);
            setIsLoading(_ => false);
        })
        .catch((err: any) => {
            if (err instanceof CanceledError) return;
            setError(_ => err.message);
            setIsLoading(_ => false);
        });
        return () => controller.abort();
    }, deps ? [...deps] : []);
    return {data, error, isLoading};
};

export default useData;