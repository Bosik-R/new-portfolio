import React from 'react';

const GitHubIcon = () => {
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
          d='M44 0H6C3 0 0 3 0 6V44C0 47 3 50 6 50L44 50C47 50 50 47 50 44V6C50 3 47.5 0 44 0ZM30.2792 40.8125C29.4354 40.975 29.1667 40.4563 29.1667 40.0125V35.4396C29.1667 33.8833 28.6208 32.8708 28.0208 32.3542C31.7333 31.9417 35.6333 30.5312 35.6333 24.1312C35.6333 22.3104 34.9833 20.8229 33.9188 19.6583C34.0896 19.2375 34.6604 17.5417 33.7542 15.2479C33.7542 15.2479 32.3562 14.8 29.175 16.9562C27.8417 16.5812 26.4167 16.4 25 16.3917C23.5833 16.3979 22.1583 16.5812 20.8271 16.9521C17.6437 14.7958 16.2437 15.2437 16.2437 15.2437C15.3396 17.5396 15.9104 19.2333 16.0833 19.6562C15.0167 20.8229 14.3667 22.3083 14.3667 24.1292C14.3667 30.5125 18.2563 31.9438 21.9604 32.3667C21.4833 32.7833 21.0521 33.5167 20.9021 34.5958C19.95 35.0208 17.5396 35.7563 16.0521 33.2083C16.0521 33.2083 15.1708 31.6083 13.4958 31.4896C13.4958 31.4896 11.8708 31.4688 13.3812 32.5042C13.3812 32.5042 14.475 33.0167 15.2333 34.9417C15.2333 34.9417 16.1979 37.9167 20.8333 36.9083V40.0104C20.8333 40.45 20.5646 40.9667 19.7333 40.8125C13.1083 38.6104 8.33333 32.3625 8.33333 25C8.33333 15.7937 15.7958 8.33333 25 8.33333C34.2042 8.33333 41.6667 15.7937 41.6667 25C41.6667 32.3604 36.8979 38.6063 30.2792 40.8125Z'
          className='fill-[url(#grad1)] group-hover:fill-grayLight'
        />
      </svg>
    </span>
  );
};

export default GitHubIcon;
