import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: Infinity,
      refetchOnMount: true, // Default
      refetchInterval: false, // Default
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

export default queryClient;
