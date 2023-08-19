import { Music4, User } from 'lucide-react';
import { Button } from '../ui/button';
import { NavigationMenuComp } from './MenuList';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className='flex items-center py-2 px-10 shadow sticky top-0'>
      <div className='flex-1 '>
        <Button
          variant='ghost'
          className='flex items-center gap-2 justify-center p-1 cursor-pointer rounded px-2'
        >
          <Music4 size={28} />
          <p className='font-semibold'>Music Hub</p>
        </Button>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <NavigationMenuComp />
      </div>
      <div className='flex-1 flex justify-end'>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
