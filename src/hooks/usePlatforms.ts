import Platforms from "../data/Platforms";
import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
// const usePlatforms = () => ({data: Platforms, isLoading: false, error: null});
const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClient.getAll(),
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: Platforms,
    })
}

export default usePlatforms;
