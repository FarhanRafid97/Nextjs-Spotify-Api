import { useGetTopTrack } from '@/queries/useGetTopTrack';
import React from 'react';

const TopTrackSection = () => {
  const { data, isLoading } = useGetTopTrack({ limit: 5, offset: 0 });

  return <section className='w-full h-[100vh]'></section>;
};

export default TopTrackSection;
