import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { projectCards } from '@/statics/projectCards';

const data = {
  techUsed: {
    title: 'tech used',
    tech: ['next.js', 'shadcn', 'tailwind', 'socket.io', 'mongoDB', 'mongoose'],
  },
};

const ManagerDescription = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (activeCard === projectCards.CURRENT_WORKING_ON) {
      animate(scope.current, { bottom: 35 }, { delay: 0.2, duration: 0.3 });
    } else {
      animate(scope.current, { bottom: -400 }, { duration: 0.1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <ul ref={scope} className='absolute w-[90%] h-fit text-base'>
      <li id='desc_li_1' className='p-0 m-0 list-none'>
        <p className='mb-3'>
          Vehicles stock manager. Add and edit vehicles data and files. View
          data from the web scraper Scrapi API
        </p>
      </li>
      <li id='desc_li_2' className='p-0 m-0 list-none'>
        <p className='mb-8'>
          Additional features that will be included:
          <span>- managing Scrapi</span>
          <span>
            - integration witch otomoto api to create sales offer directly from
            app
          </span>
          <span>
            - if posible integration witch vehicle insurance provider to sign
            and mantein contracts
          </span>
        </p>
      </li>
      <li id='desc_li_3' className='p-0 m-0 list-none'>
        <h5 className='text-xs border-b-2 border-gray-400 pb-2 mb-4 uppercase text-grayLight'>
          {data.techUsed.title}
        </h5>
      </li>
      <li id='desc_li_4' className='p-0 m-0 list-none'>
        <div className='flex gap-3 flex-wrap text-grayLight'>
          {data.techUsed.tech.map((item, index) => (
            <span
              key={index}
              className='skill-glass-chip px-3 py-1 w-fit text-xs'>
              {item}
            </span>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default ManagerDescription;
