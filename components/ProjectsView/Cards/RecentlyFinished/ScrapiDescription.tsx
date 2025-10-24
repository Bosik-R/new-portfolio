'use client';
import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { projectCards } from '../../../../statics/projectCards';
import { scrapiProjectData } from '@/statics/projectsData';

const ScrapiDescription = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();
  const { desc, techUsed } = scrapiProjectData;

  useEffect(() => {
    if (activeCard === projectCards.RECENTLY_FINISHED) {
      animate(scope.current, { right: 35 }, { delay: 0.2, duration: 0.3 });
    } else {
      animate(scope.current, { right: -500 }, { duration: 0.1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <div
      ref={scope}
      className='absolute top-20 h-[600px] w-[380px] 2xl:w-[300px]'>
      <p className='mb-2 text-[14px]'>{desc.pOne}</p>
      <p className='mb-5 text-[14px]'>{desc.pTwo}</p>
      <h6 className='text-xs border-b-2 border-gray-400 pb-2 mb-3 uppercase text-[#f0f0f0]'>
        {techUsed.title}
      </h6>
      <div className='flex gap-3 flex-wrap text-[#f0f0f0]'>
        {techUsed.tech.map((item, index) => (
          <span
            key={index}
            className='skill-glass-chip px-3 py-1 w-fit text-xs'>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrapiDescription;
