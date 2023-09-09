'use client';
import Hero from '@/components/modules/HomePage/Hero';
import TopTrackSection from '@/components/modules/HomePage/TopTrackSection';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function refreshAccessToken() {
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
            ).toString('base64'),
        },
        data: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN ?? '',
        }),
      };

      try {
        const { data } = await axios(authOptions);
      } catch (error) {
        return null;
      }
    }

    const getData = async () => {
      const data = await fetch(
        `https://api.spotify.com/v1/users/${session?.user?.sub}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        },
      );

      const jsonData = await data.json();

      setUser(jsonData);
    };
    refreshAccessToken();
    getData();
  }, [session]);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <TopTrackSection />
    </main>
  );
}
