'use client';

import { useEffect } from 'react';
import { projectCards } from '../../../../statics/projectCards';
import { useAnimate } from 'framer-motion';
import ManagerImageWrapper from './ManagerImageWrapper';
import { twMerge } from 'tailwind-merge';
import ManagerDescription from './ManagerDescription';
import { useMediaQuery } from 'react-responsive';

const CurrentWork = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();
  const isSmallDevice = useMediaQuery({ maxWidth: 1536 });

  useEffect(() => {
    const animation = async () => {
      if (activeCard === projectCards.CURRENT_WORKING_ON) {
        animate(
          '#manager_title',
          {
            left: isSmallDevice ? 25 : 42,
            top: isSmallDevice ? 20 : 40,
            scale: 1,
            width: 440,
          },
          { duration: 0.5 }
        );
        animate(
          '#card2_title_1',
          { left: '68%', top: 20, scale: 0.5 },
          { duration: 0.5 }
        );
        await animate(
          '#card2_title_2',
          { left: '84%', top: 20, scale: 0.5 },
          { duration: 0.5 }
        );
        animate('#underline', { right: 25 });
      } else {
        animate(
          '#manager_title',
          {
            left: activeCard === projectCards.PREVIOUSE_PROJECTS ? 0 : 50,
            top: 100,
            scale: 0.5,
            width: 251,
          },
          { duration: 0.5 }
        );
        await animate('#underline', { right: -200 }, { duration: 0.2 });
        animate(
          '#card2_title_1',
          { left: '5%', top: 20, scale: 1 },
          { duration: 0.5 }
        );
        await animate(
          '#card2_title_2',
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
        activeCard === projectCards.CURRENT_WORKING_ON
          ? 'opacity-100 cursor-default'
          : 'cursor-pointer'
      )}>
      <span
        id='underline'
        className='absolute top-[47px] h-[2px] bg-white w-[157px]'></span>
      <h6
        id='card2_title_1'
        className='absolute text-center uppercase tracking-[4px] font-semibold'>
        Current
      </h6>
      <h6
        id='card2_title_2'
        className='absolute text-center uppercase tracking-[4px] font-semibold'>
        Work
      </h6>
      <ManagerImageWrapper activeCard={activeCard} />
      <h2 id='manager_title' className='absolute font-bold w-fit'>
        DASHBOARD
      </h2>
      <ManagerDescription activeCard={activeCard} />
    </div>
  );
};

export default CurrentWork;
