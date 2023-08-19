'use client';
import SigninButton from '@/components/SIgnInButton';
import { JWT } from 'next-auth/jwt';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!session) {
      return;
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
    getData();
  }, [session]);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        {user === null ? (
          <div className='w-[200px] bg-gray-50/10 h-[200px] animate-pulse' />
        ) : (
          <div>
            {/* <Image src={user?.images?.[1]?.url} width={200} height={200} alt="profile pcit" />
            <a href={user?.external_urls.spotify} className="" target="_blank">
              <p className="hover:text-blue-500 text-blue-400">{user.display_name}</p>
            </a> */}
          </div>
        )}
        <SigninButton />
      </div>
    </main>
  );
}
