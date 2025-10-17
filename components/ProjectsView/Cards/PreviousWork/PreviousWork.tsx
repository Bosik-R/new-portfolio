'use client';

import { useEffect } from 'react';
import { projectCards } from '@/statics/projectCards';
import { useAnimate } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import PreviousWorkContent from './PreviousWorkContent';

const PreviousWork = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      if (activeCard === projectCards.PREVIOUSE_PROJECTS) {
        animate(
          '#card3_title_1',
          { left: '74%', top: 20, scale: 0.5 },
          { duration: 0.5 }
        );
        await animate(
          '#card3_title_2',
          { left: '84%', top: 20, scale: 0.5 },
          { duration: 0.5 }
        );
        animate('#underline', { right: 25 });
      } else {
        await animate('#underline', { right: -250 }, { duration: 0.1 });
        animate(
          '#card3_title_1',
          { left: '5%', top: 20, scale: 1 },
          { duration: 0.5 }
        );
        await animate(
          '#card3_title_2',
          { left: '5%', top: 50, scale: 1 },
          { duration: 0.5 }
        );
      }
    };

    animation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <div
      ref={scope}
      className={twMerge(
        'relative overflow-hidden w-full h-full text-3xl',
        activeCard === projectCards.PREVIOUSE_PROJECTS
          ? 'py-8 px-8 opacity-100 cursor-default'
          : 'py-4 px-4 cursor-pointer'
      )}>
      <span
        id='underline'
        className='absolute top-[49px] h-[2px] bg-white w-[204px]'></span>
      <h6
        id='card3_title_1'
        className='absolute text-center uppercase tracking-[4px] font-semibold'>
        Previous
      </h6>
      <h6
        id='card3_title_2'
        className='absolute text-center uppercase tracking-[4px] font-semibold'>
        Projects
      </h6>
      <PreviousWorkContent activeCard={activeCard} />
    </div>
  );
};

export default PreviousWork;
