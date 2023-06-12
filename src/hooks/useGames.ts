import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '../services/api-client';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesRes {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const control = new AbortController();

        apiClient
            .get<FetchGamesRes>('/games', { signal: control.signal })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => control.abort();
    }, []);

    return { games, error };
};

export default useGames;
