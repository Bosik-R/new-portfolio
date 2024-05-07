'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import SplineEventButton from '../Buttons/SplineEventButton';
import HalfWidthBgEffect from '../Features/HalfWidthBgEffect';

export type AnimationVariants = {
  initial: {
    x: string;
    transition: {
      deley?: number;
      duration: number;
    };
  };
  animate: {
    x: string;
    transition: {
      deley?: number;
      duration: number;
    };
  };
  exit: {
    x: string;
    transition: {
      duration: number;
    };
  };
};

const AnimationWrapper = ({
  children,
  variants,
  invert = false,
  splineTarget,
}: {
  children: React.ReactNode;
  variants: AnimationVariants;
  invert?: boolean;
  splineTarget: string;
}) => {
  const [close, setClose] = useState(false);

  return (
    <AnimatePresence>
      {!close && (
        <motion.section
          variants={variants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          className={twMerge(
            'md:absolute top-0 left-0 bottom-0 w-full h-fit md:h-full relative flex flex-col z-20 overflow-auto',
            invert
              ? 'right-side-half-width-gradient items-end'
              : 'left-side-half-width-gradient '
          )}>
          <HalfWidthBgEffect invert={invert} />
          <div
            className={twMerge(
              'mb-2  md:mb-10 p-2 md:p-8',
              invert ? 'self-end' : 'self-start'
            )}>
            <SplineEventButton target={splineTarget} setClose={setClose} />
          </div>
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default AnimationWrapper;
