import { useGetTopTrack } from '@/queries/useGetTopTrack';
import Vinyl from './Vinyl';
const TopTrackSection = () => {
  const { data, isLoading } = useGetTopTrack({ limit: 5, offset: 0 });

  return (
    <section className='w-full  h-[100vh] relative overflow-hidden flex justify-center items-center'>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <Vinyl track={data?.tracks[0]} className='left-[200px] top-[40px]' />
          <Vinyl track={data?.tracks[1]} className='left-[-50px] top-[300px]' />
          <Vinyl
            track={data?.tracks[2]}
            className='right-[-40px] top-[150px]'
          />
          <Vinyl
            track={data?.tracks[3]}
            className='left-[180px] bottom-[-40px]'
          />
          <Vinyl
            track={data?.tracks[4]}
            className='right-[180px] bottom-[50px]'
          />
        </>
      )}
      <p className='custome-font-Bebas_Neue-google even-span text-[150px]'>
        My Top Track
      </p>
    </section>
  );
};

export default TopTrackSection;
