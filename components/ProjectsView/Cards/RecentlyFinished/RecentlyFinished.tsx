'use client';
import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { projectCards } from '@/statics/projectCards';
import ScrapiImageWrapper from './ScrapiImageWrapper';
import ScrapiDescription from './ScrapiDescription';

const RecentlyFinished = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      if (activeCard === projectCards.RECENTLY_FINISHED) {
        animate('#scrapi_title', { top: 20, left: 50, scale: 1 });
        animate(
          '#card1_title_1',
          { left: '61%', top: 0, scale: 0.5 },
          { duration: 0.5 }
        );
        await animate(
          '#card1_title_2',
          { left: '78%', top: 0, scale: 0.5 },
          { duration: 0.5 }
        );
        animate('#underline', { right: 5 });
      } else {
        animate('#scrapi_title', { top: 74, left: 60, scale: 0.5 });
        await animate('#underline', { right: -200 }, { duration: 0.2 });
        animate(
          '#card1_title_1',
          { left: '5%', top: 5, scale: 1 },
          { duration: 0.5 }
        );
        await animate(
          '#card1_title_2',
          { left: '5%', top: 34, scale: 1 },
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
      className='w-full h-full relative text-3xl overflow-hidden'>
      <span
        id='underline'
        className='absolute top-[28px] h-[2px] bg-white w-[197px]'></span>
      <h6
        id='card1_title_1'
        className={twMerge(
          'absolute text-center uppercase tracking-[4px] font-semibold'
        )}>
        Recently
      </h6>
      <h6
        id='card1_title_2'
        className={twMerge(
          'absolute text-center uppercase tracking-[4px] font-semibold'
        )}>
        finished
      </h6>
      <h2 id='scrapi_title' className='absolute font-bold'>
        SCRAPI
      </h2>
      <ScrapiImageWrapper activeCard={activeCard} />
      <ScrapiDescription activeCard={activeCard} />
    </div>
  );
};

export default RecentlyFinished;
