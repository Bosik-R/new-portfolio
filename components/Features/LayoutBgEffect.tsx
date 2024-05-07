import React from 'react';
import '../../styles/layoutBgColorEllipses.css';

const LayoutBgEffect = () => {
  return (
    <div className='absolute top-0 left-0 bottom-0 right-0 overflow-hidden -z-10'>
      <span className='layout-bg-ellips-1'></span>
      <span className='layout-bg-ellips-2'></span>
      <span className='layout-bg-ellips-3'></span>
      <span className='layout-bg-ellips-4'></span>
      <div className='blur-effect'></div>
    </div>
  );
};

export default LayoutBgEffect;
