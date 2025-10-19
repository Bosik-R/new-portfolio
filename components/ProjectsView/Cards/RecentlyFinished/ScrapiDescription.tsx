import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { projectCards } from '../../../../statics/projectCards';

const data = {
  techUsed: {
    title: 'tech used',
    tech: [
      'expo react native',
      'expo notification',
      'tailwind',
      'socket.io',
      'node.js',
      'express',
      'mongoDB',
      'mongoose',
    ],
  },
};
const ScrapiDescription = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (activeCard === projectCards.RECENTLY_FINISHED) {
      animate(scope.current, { right: 0 }, { delay: 0.2, duration: 0.3 });
    } else {
      animate(scope.current, { right: -300 }, { duration: 0.1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);
  return (
    <ul ref={scope} className='absolute top-14 w-[300px] h-[600px] list-none'>
      <li className='p-0 m-0 list-none'>
        <p className='mb-5'>
          The soule of this app is the backend api. Build with node.js and
          express. Its purpose is to scrape popular car retail sites every
          minute to find the newest entries and send them to the mobile app via
          socket connection and expo notification. I used cron to set one minute
          interval for scraping and comparing the data.
        </p>
      </li>
      <li className='p-0 m-0'>
        <p className='mb-10'>
          Mobile app uses socket connection to keap the data up to date when the
          app is currently open. When the mobile app is in background or off the
          notifications are send imidietly when a new offer is posted.
        </p>
      </li>
      <li className='p-0 m-0'>
        <h6 className='text-xs border-b-2 border-gray-400 pb-2 mb-4 uppercase text-[#f0f0f0]'>
          {data.techUsed.title}
        </h6>
      </li>
      <li className='p-0 m-0'>
        <div className='flex gap-3 flex-wrap text-[#f0f0f0]'>
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

export default ScrapiDescription;
