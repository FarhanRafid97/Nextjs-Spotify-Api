import { TopArtistsResponse } from '@/types/UserTopItems';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetTopTrack = ({
  isEnabled,
  limit = '5',
  offset = '0',
}: {
  isEnabled?: boolean;
  limit?: string;
  offset?: string;
  token: string;
}) => {
  const query = useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<TopArtistsResponse | null> => {
      try {
        const data = await fetch(
          `https://api.spotify.com/v1/me/top/artists?limit=${limit}&offset=${offset}`,
        );

        const jsonData: TopArtistsResponse = await data.json();

        return jsonData;
      } catch (error: any) {
        return null;
      }
    },
    enabled: isEnabled,
  });

  return query;
};
