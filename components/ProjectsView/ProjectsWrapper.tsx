'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import FullPageBgEffect from '../Features/FullPageBgEffect';
import SplineEventButton from '../Buttons/SplineEventButton';

const ProjectsWrapper = ({ children }: { children: ReactNode }) => {
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const [close, setClose] = useState(false);

  return (
    <AnimatePresence>
      {!close && (
        <motion.section
          initial={{ webkitMaskImage: hiddenMask, maskImage: hiddenMask }}
          animate={{ webkitMaskImage: visibleMask, maskImage: visibleMask }}
          transition={{ duration: 1, delay: 2.7 }}
          exit={{
            webkitMaskImage: hiddenMask,
            maskImage: hiddenMask,
            transition: { duration: 0.7, delay: 0 },
          }}
          className='absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-col items-center z-30 bg-[#040011] overflow-hidden'>
          <FullPageBgEffect />
          <div className='py-4 lg:py-0 relative lg:absolute lg:top-8 lg:right-8 top-0 right-0 z-30'>
            <SplineEventButton target='projectsReverse' setClose={setClose} />
          </div>
          <div className='relative flex justify-center items-center w-full h-full p-10 pt-20 overflow-auto'>
            {children}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ProjectsWrapper;
