import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import { Genre } from '../entities/Genre';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 1 * 1000 * 60 * 60 * 24, // 24hours
        initialData: genres,
    });

export default useGenres;
