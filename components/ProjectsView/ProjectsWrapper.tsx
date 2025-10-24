'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import FullPageBgEffect from '../Features/FullPageBgEffect';
import SplineEventButton from '../Buttons/SplineEventButton';

const ProjectsWrapper = ({ children }: { children: ReactNode }) => {
  const [close, setClose] = useState(false);

  return (
    <AnimatePresence>
      {!close && (
        <motion.section
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{
            clipPath: 'circle(80% at 50% 50%)',
            transition: { duration: 1, delay: 2.5 },
          }}
          exit={{
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.5, delay: 0 },
          }}
          className='absolute top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-30 bg-[#040011] overflow-hidden'>
          <FullPageBgEffect />
          <div className='absolute top-6 2xl:top-8 right-6 2xl:right-8 z-30'>
            <SplineEventButton target='projectsReverse' setClose={setClose} />
          </div>
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ProjectsWrapper;
