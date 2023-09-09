'use client';
import { useGetTopArtists } from '@/queries/useGetTopItems';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Image from 'next/image';

interface TopArtistProps {}

const TopArtist: React.FC<TopArtistProps> = ({}) => {
  const { data: session } = useSession();
  const { data: artists } = useGetTopArtists({
    isEnabled: !!session?.user.accessToken,
    token: session?.user.accessToken ?? '',
    limit: '10',
    offset: '0',
  });

  return (
    <div>
      {artists?.items?.map((artist) => {
        return (
          <div key={artist.id}>
            <p>{artist.name}</p>
            <Image
              src={artist.images[1].url}
              height={artist.images[1].height}
              width={artist.images[1].width}
              alt=' cover artist'
            />
          </div>
        );
      })}
    </div>
  );
};

export default TopArtist;
