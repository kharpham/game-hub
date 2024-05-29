import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";


export interface Platform {
    id: number,
    name: string,
    slug: string,
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[],
}

interface FetchGamesResponse {
    count: number,
    results: Game[],
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsloading(_ => true);
        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
        .then(res => {
            setGames(_ => res.data.results);
            setIsloading(_ => false);
        })
        .catch(err => {
            if (err instanceof CanceledError) return;
            setError(_ => err.message);
            setIsloading(_ => false);
        });
        return () => controller.abort();
    }, []);
    return {games, error, setGames, setError, isLoading, setIsloading};
}

export default useGames;