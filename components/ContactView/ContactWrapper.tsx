'use client';

import SplineEventButton from '@/components/Buttons/SplineEventButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import FullPageBgEffect from '../Features/FullPageBgEffect';

const ContactWrapper = ({ children }: { children: React.ReactNode }) => {
  const [close, setClose] = useState(false);

  return (
    <AnimatePresence>
      {!close && (
        <motion.div
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{
            clipPath: 'circle(80% at 50% 50%)',
            transition: { duration: 1, delay: 2.5 },
          }}
          exit={{
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.5, delay: 0 },
          }}
          className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-20 bg-mainBg'>
          <div className='absolute top-12 right-20 z-30 text-grayLight'>
            <SplineEventButton
              target={'contactMeReverse'}
              setClose={setClose}
            />
          </div>
          <FullPageBgEffect />
          <div className='max-w-4xl w-full flex gap-8'>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactWrapper;
