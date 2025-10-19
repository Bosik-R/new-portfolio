import React from 'react';

const LinkedInIcon = () => {
  return (
    <span className='glass-icon grid place-content-center group'>
      <svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <linearGradient id='grad1' x1='0%' y1='50%' x2='100%' y2='100%'>
            <stop
              offset='0%'
              style={{ stopColor: 'rgba(255, 255, 255, 0.5)' }}
            />
            <stop
              offset='100%'
              style={{ stopColor: 'rgba(255, 255, 255, 0.2)' }}
            />
          </linearGradient>
        </defs>
        <path
          className='fill-[url(#grad1)] group-hover:fill-[#f0f0f0]'
          d='M44 0H6C3 0 0 3 0 6V44C0 47 3 50 6 50H44C47 50 50 47 50 44V6C50 3 47 0 44 0ZM16.6667 39.5833H10.4167V16.6667H16.6667V39.5833ZM13.5417 14.025C11.5292 14.025 9.89583 12.3792 9.89583 10.35C9.89583 8.32083 11.5292 6.675 13.5417 6.675C15.5542 6.675 17.1875 8.32083 17.1875 10.35C17.1875 12.3792 15.5562 14.025 13.5417 14.025ZM41.6667 39.5833H35.4167V27.9083C35.4167 20.8917 27.0833 21.4229 27.0833 27.9083V39.5833H20.8333V16.6667H27.0833V20.3438C29.9917 14.9563 41.6667 14.5583 41.6667 25.5021V39.5833Z'
        />
      </svg>
    </span>
  );
};

export default LinkedInIcon;
