'use client';
import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { projectCards } from '../../../../statics/projectCards';
import ScrapiImageWrapper from './ScrapiImageWrapper';
import ScrapiDescription from './ScrapiDescription';
import { useMediaQuery } from 'react-responsive';

const RecentlyFinished = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();
  const isSmallDevice = useMediaQuery({ maxWidth: 1536 });

  useEffect(() => {
    const animation = async () => {
      if (activeCard === projectCards.RECENTLY_FINISHED) {
        animate('#scrapi_title', {
          top: isSmallDevice ? 25 : 40,
          left: isSmallDevice ? 20 : 70,
          scale: 1,
        });
        animate(
          '#card1_title_1',
          { right: 77, top: 20, scale: 0.5 },
          { duration: 0.5 }
        );
        await animate(
          '#card1_title_2',
          { right: -16, top: 20, scale: 0.5 },
          { duration: 0.5 }
        );
        animate('#underline', { right: 25 });
      } else if (activeCard === projectCards.PREVIOUSE_PROJECTS) {
        animate('#scrapi_title', {
          top: isSmallDevice ? 100 : 120,
          left: isSmallDevice ? 150 : 90,
          scale: 0.5,
        });

        await animate('#underline', { right: -240 }, { duration: 0.2 });

        animate(
          '#card1_title_1',
          { right: 295, top: 25, scale: 1 },
          { duration: 0.5 }
        );

        await animate(
          '#card1_title_2',
          { right: 314, top: 58, scale: 1 },
          { duration: 0.5 }
        );
      } else {
        animate('#scrapi_title', {
          top: isSmallDevice ? 120 : 100,
          left: isSmallDevice ? 150 : 100,
          scale: 0.5,
        });

        await animate('#underline', { right: -240 }, { duration: 0.2 });

        animate(
          '#card1_title_1',
          { right: 120, top: 22, scale: 1 },
          { duration: 0.5 }
        );

        await animate(
          '#card1_title_2',
          { right: 139, top: 54, scale: 1 },
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
      className='w-full h-full relative overflow-hidden text-3xl'>
      <span
        id='underline'
        className='absolute top-[47px] h-[2px] bg-white w-[200px]'></span>
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
