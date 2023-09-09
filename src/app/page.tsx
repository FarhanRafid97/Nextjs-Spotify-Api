'use client';
import Hero from '@/components/modules/HomePage/Hero';
import SectionAbout from '@/components/modules/HomePage/SectionAbout';
import TopTrackSection from '@/components/modules/HomePage/TopTrackSection';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<any>(null);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <SectionAbout />
      <TopTrackSection />
    </main>
  );
}
