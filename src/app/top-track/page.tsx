'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const TopTrack = () => {
  const { data: session } = useSession();

  const [list, setList] = useState<any>();

  return (
    <div className='w-full'>
      <div className='flex gap-4'>
        <div className='w-[50px] flex mr-2 star'>
          samdlmaskldmk lasm dkla smdkamsld samdlma skl
        </div>
      </div>
    </div>
  );
};

export default TopTrack;
