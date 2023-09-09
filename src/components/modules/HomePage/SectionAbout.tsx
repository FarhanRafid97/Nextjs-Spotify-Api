import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
const SectionAbout = () => {
  return (
    <section className='w-full relative flex-col h-[100vh] overflow-hidden flex justify-center items-center'>
      <div className='absolute left-1/2 bottom-[-300px] transform -translate-x-1/2'>
        <Player
          autoplay
          loop
          src='/lottie/playy.json'
          style={{ height: '1000px', width: '1000px' }}
        />
      </div>
      <div className='custome-font-Bebas_Neue-google mb-[150px] flex flex-col  text-[150px] justify-center items-center'>
        <div className='overflow-hidden'>
          <motion.p className='odd-span'>
            Welcome <span className='even-span'>To</span> My Music
          </motion.p>
        </div>
        <p className='odd-span'>Library</p>
      </div>
    </section>
  );
};

export default SectionAbout;
