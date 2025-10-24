import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { projectCards } from '../../../../statics/projectCards';
import { managerProjectData } from '@/statics/projectsData';

const ManagerDescription = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();
  const { desc, techUsed } = managerProjectData;

  useEffect(() => {
    if (activeCard === projectCards.CURRENT_WORKING_ON) {
      animate(scope.current, { bottom: 35 }, { delay: 0.2, duration: 0.3 });
    } else {
      animate(scope.current, { bottom: -600 }, { duration: 0.1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <div ref={scope} className='absolute left-[25px] w-[90%] h-fit text-base'>
      <p className='mb-5 w-[240px] 2xl:w-full'>{desc.pOne}</p>
      <ul>
        <li className='mb-2 w-[240px] 2xl:w-full'>{desc.listItemOne}</li>
        <li className='mb-2 w-[240px] 2xl:w-full'>{desc.listItemTwo}</li>
        <li className='mb-5 w-[240px] 2xl:w-full'>{desc.listItemThree}</li>
        <li className='p-0 m-0'>
          <h6 className='text-xs border-b-2 border-gray-400 pb-2 mb-4 uppercase text-[#f0f0f0]'>
            {techUsed.title}
          </h6>
        </li>
        <li className='p-0 m-0'>
          <div className='flex gap-3 flex-wrap text-[#f0f0f0]'>
            {techUsed.tech.map((item, index) => (
              <span
                key={index}
                className='skill-glass-chip px-3 py-1 w-fit text-xs'>
                {item}
              </span>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ManagerDescription;
