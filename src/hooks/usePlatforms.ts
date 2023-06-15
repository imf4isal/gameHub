import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import { Platform } from '../entities/Platform';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatform = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24h,
        initialData: platforms,
    });

// useData<Platform>('/platforms/lists/parents');

export default usePlatform;
