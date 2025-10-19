'use client';

import useSpline from '../../hooks/useSpline';
import { AnimatePresence, motion } from 'framer-motion';
import Spinner from '../Features/Spinner';
import Legend from '../Legend/Legend';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import Spline from '@splinetool/react-spline';

const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE ?? '';

const SplineScene = () => {
  const { onLoad, onSplineMouseDown, loading } = useSpline();
  const pathname = usePathname();
  const home = pathname === '/';

  return (
    <div
      className={twMerge(
        'relative top-0 left-0 w-full md:h-full z-10',
        home ? 'h-full' : 'h-1/2'
      )}>
      <AnimatePresence>
        {loading && (
          <motion.div
            layout
            initial={{ clipPath: 'circle(80% at 50% 50%)' }}
            exit={{
              clipPath: 'circle(0% at 50% 50%)',
              transition: { duration: 1.5 },
            }}
            className='absolute flex w-full h-full justify-center items-center text-[#f0f0f0] bg-[#040011]'>
            <motion.div
              initial={{ x: 0, y: 0 }}
              exit={{ x: 0, y: 0, scale: 0.3 }}
              transition={{ duration: 0.5, delay: 0.7 }}>
              <Spinner />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Spline
        scene={scene}
        onLoad={onLoad}
        onSplineMouseDown={onSplineMouseDown}
      />
      {home && !loading ? <Legend /> : null}
    </div>
  );
};

export default SplineScene;
