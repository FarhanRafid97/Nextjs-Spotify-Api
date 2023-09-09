import twclsx from '@/lib/twclsx';
import { useGetTopTrack } from '@/queries/useGetTopTrack';
import { MappingInterface, ResponseTopTrackApi } from '@/types/UserTopItems';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
interface VinylProps {
  track?: MappingInterface;

  className?: string;
}
const Vinyl: React.FC<VinylProps> = ({ track, className: c }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [before, setBefore] = useState(0);

  const className = twclsx(
    `absolute w-fit cursor-pointer ${isHover ? 'z-[99]' : ''}  rounded-[50%] `,
    c,
  );
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href={track?.songUrl} target='_blank'>
      <motion.div
        animate={{
          rotate: scrollY,
          scale: isHover ? 1.3 : 1,
        }}
        onMouseEnter={() => {
          setIsHover(true);
          setBefore(scrollY);
          setScrollY((p) => p + 100);
        }}
        onMouseLeave={() => {
          setIsHover(false);
          setScrollY(before);
        }}
        key={track?.title}
        className={className}
      >
        <motion.div
          key={track?.title}
          className='absolute top-1/2 transform -translate-y-1/2  left-1/2 -translate-x-1/2 '
        >
          <Image
            src={track?.images.url ?? ''}
            width={200}
            placeholder='blur'
            blurDataURL='/assets/vintage.jpg'
            height={200}
            className='rounded-[50%]'
            alt='hero image'
          />
          <div className='absolute top-1/2 transform -translate-y-1/2  left-1/2 -translate-x-1/2 '>
            <Play className='text-black/40 ' size='60px' />
          </div>
        </motion.div>
        <Image
          src='/assets/vinyl2.png'
          width={250}
          placeholder='blur'
          blurDataURL='/assets/vinyl2.png'
          height={250}
          alt='hero image'
        />
      </motion.div>
    </a>
  );
};

export default Vinyl;
