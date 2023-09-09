import Image from 'next/image';
import { ParallaxText } from './RunningText';
const Hero = () => {
  return (
    <section className='w-full relative  h-[100vh] flex justify-center items-center'>
      <div className='relative z-[4]'>
        <Image
          src='/assets/vintage.jpg'
          width={850}
          height={850}
          className='rounded-[999px] ring-8 ring-primary ring-offset-8 brightness-90'
          alt='hero image'
        />
      </div>
      <div className='absolute z-1 top-1/2 transform -translate-y-1/2 flex gap-[90px] flex-col -rotate-[10deg] w-[120vw] '>
        <ParallaxText baseVelocity={-2} text='My Spotify Music' />
        <ParallaxText baseVelocity={2} text='I Love Music' />
        <ParallaxText baseVelocity={-2} text='My Spotify Music' />
      </div>
    </section>
  );
};

export default Hero;
