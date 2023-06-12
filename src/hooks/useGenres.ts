import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '../services/api-client';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface FetchGenresRes {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const control = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchGenresRes>('/genres', { signal: control.signal })
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => control.abort();
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;
