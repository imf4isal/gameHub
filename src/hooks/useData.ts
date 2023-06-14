import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '../services/api-client';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: any
) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(
        () => {
            const control = new AbortController();

            setLoading(true);

            apiClient
                .get<FetchResponse<T>>(endpoint, {
                    signal: control.signal,
                    ...requestConfig,
                })
                .then((res) => {
                    setData(res.data.results);
                    setLoading(false);
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                });

            return () => control.abort();
        },
        deps ? [...deps] : []
    );

    return { data, error, isLoading };
};

export default useData;
