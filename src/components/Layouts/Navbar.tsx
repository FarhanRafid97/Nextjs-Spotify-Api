'use client';
import { Music4 } from 'lucide-react';
import { Button } from '../ui/button';
import { NavigationMenuComp } from './MenuList';
import { UserMenu } from './UserManu';
import { useState } from 'react';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isHoverTitle, setIsHoverTitle] = useState(false);
  return (
    <div className='flex items-center bg-background z-[99] py-2 px-10 shadow fixed w-full top-0'>
      <div className='flex-1  '>
        <Button
          variant='ghost'
          className='flex items-center gap-2 text-primary hover:text-red-900 hover:bg-white/20 justify-center p-1 cursor-pointer rounded px-2'
        >
          <Music4 size={28} />
          <p className='font-semibold '>Music Hub</p>
        </Button>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <NavigationMenuComp />
      </div>
      <div className='flex-1 flex justify-end'>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
