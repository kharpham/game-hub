import Platforms from "../data/Platforms";
import { FetchResponse } from "../services/apiClient";
import apiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

// const usePlatforms = () => ({data: Platforms, isLoading: false, error: null});
const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: {count: Platforms.length, results: Platforms},
    })
}

export default usePlatforms;
