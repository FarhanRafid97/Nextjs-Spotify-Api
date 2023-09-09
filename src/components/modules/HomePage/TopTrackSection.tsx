import { useGetTopTrack } from '@/queries/useGetTopTrack';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Vinyl from './Vinyl';
const TopTrackSection = () => {
  const { data, isLoading } = useGetTopTrack({ limit: 5, offset: 0 });

  return (
    <section className='w-full  h-[100vh] relative overflow-hidden'>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <Vinyl track={data?.tracks[0]} className='left-[100px] top-[40px]' />
          <Vinyl track={data?.tracks[1]} className='left-[-50px] top-[350px]' />
          <Vinyl
            track={data?.tracks[2]}
            className='right-[-20px] top-[150px]'
          />
          <Vinyl
            track={data?.tracks[3]}
            className='left-[-40px] bottom-[-80px]'
          />
          <Vinyl
            track={data?.tracks[4]}
            className='right-[180px] bottom-[100px]'
          />
        </>
      )}
    </section>
  );
};

export default TopTrackSection;
