import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '../services/api-client';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesRes {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const control = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchGamesRes>('/games', { signal: control.signal })
            .then((res) => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => control.abort();
    }, []);

    return { games, error, isLoading };
};

export default useGames;
