import { useQuery } from "@tanstack/react-query";
import Genres from "../data/Genres";
import APIClient from "../services/apiClient";
// import { FetchResponse, } from "../services/apiClient";

export interface Genre {
    id: number,
    name: string,
    image_background: string,
}

// const useGenres = () => ({data: Genres, isLoading: false, error: null});
const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient.getAll(),
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: Genres,
    })
}
export default useGenres;