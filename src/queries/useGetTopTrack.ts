import { ResponseTopTrackApi } from '@/types/UserTopItems';
import { useQuery } from '@tanstack/react-query';

export const useGetTopTrack = ({
  isEnabled,
  limit = 5,
  offset = 0,
}: {
  isEnabled?: boolean;
  limit?: number;
  offset?: number;
}) => {
  const query = useQuery({
    queryKey: ['top-track'],
    queryFn: async (): Promise<ResponseTopTrackApi | null> => {
      try {
        const data = await fetch(
          `http://localhost:3000/api/top-track?limit=${limit}&offset=${offset}`,
        );

        const jsonData: ResponseTopTrackApi = await data.json();

        return jsonData;
      } catch (error: any) {
        return null;
      }
    },
    enabled: isEnabled,
  });

  return query;
};
