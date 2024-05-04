import React from 'react';
import '../../styles/pageBgColorEllipses.css';

const HalfWidthBgEffect = ({ invert = false }) => {
  return (
    <div className='absolute w-full h-full overflow-hidden'>
      {invert ? (
        <>
          <span className='page-bg-ellips-2'></span>
          <span className='page-bg-ellips-3'></span>
        </>
      ) : (
        <>
          <span className='page-bg-ellips-1'></span>
          <span className='page-bg-ellips-4'></span>
        </>
      )}
    </div>
  );
};

export default HalfWidthBgEffect;
