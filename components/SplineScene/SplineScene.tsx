'use client';

import Spline from '@splinetool/react-spline';
import useSpline from '@/hooks/useSpline';
import { AnimatePresence, motion } from 'framer-motion';
import Spinner from '../Features/Spinner';
import Legend from '../Legend/Legend';
import { usePathname } from 'next/navigation';

const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE ?? '';

const SplineScene = () => {
  const { onLoad, onMouseDown, loading } = useSpline();
  const pathname = usePathname();
  const home = pathname === '/';

  return (
    <div className='relative top-0 left-0 w-full h-1/2 md:h-full z-10'>
      <AnimatePresence>
        {loading && (
          <motion.div
            layout
            initial={{ clipPath: 'circle(80% at 50% 50%)' }}
            exit={{
              clipPath: 'circle(0% at 50% 50%)',
              transition: { duration: 1.5 },
            }}
            className='absolute flex w-full h-full justify-center items-center text-grayLight bg-mainBg'>
            <motion.div
              initial={{ x: 0, y: 0 }}
              exit={{ x: 0, y: 0, scale: 0.3 }}
              transition={{ duration: 0.5, delay: 0.7 }}>
              <Spinner />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Spline scene={scene} onLoad={onLoad} onMouseDown={onMouseDown} />
      {home && !loading ? <Legend /> : null}
    </div>
  );
};

export default SplineScene;
