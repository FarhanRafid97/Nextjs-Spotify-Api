'use client';
import Hero from '@/components/modules/HomePage/Hero';
import TopTrackSection from '@/components/modules/HomePage/TopTrackSection';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<any>(null);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <TopTrackSection />
    </main>
  );
}
