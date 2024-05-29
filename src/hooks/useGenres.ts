import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Genre {
    id: number,
    name: string,
    image_background: string,
}

interface FetchGenreResponse {
    count: number,
    results: Genre[],
}

const useGenres = () => {
    const [genres, setGames] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(_ => true);
        apiClient.get<FetchGenreResponse>('/genres', {signal: controller.signal})
        .then(res => {
            setGames(_ => res.data.results);
            setIsLoading(_ => false);
        })
        .catch(err => {
            if (err instanceof CanceledError) return;
            setError(_ => err.message);
            setIsLoading(_ => false);
        });
        return () => controller.abort();
    }, []);
    return {genres, error, isLoading};
};

export default useGenres;