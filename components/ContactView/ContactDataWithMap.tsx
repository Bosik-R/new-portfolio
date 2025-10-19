'use client';

import Link from 'next/link';

const ContactDataWithMap = () => {
  return (
    <div className='relative max-w-[500px] w-full z-50'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d299389.4180194394!2d18.68556388574913!3d51.603734658369454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471af589786a817f%3A0x29bb12c99326d34e!2sSieradz!5e0!3m2!1spl!2spl!4v1760809639751!5m2!1spl!2spl'
        width='500'
        height='250'
        style={{ border: 0 }}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='rounded-lg overflow-hidden mb-8'></iframe>
      <ul className='flex gap-4 justify-between flex-wrap gap-row-6 flex-col'>
        <li className='list-none p-0 m-0'>
          <Link
            href={`tel:+48 793 030 556`}
            className='flex items-center gap-4'>
            <svg
              width='46'
              height='45'
              viewBox='0 0 64 62'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M34.2519 52.5082C34.1312 52.4062 34.0102 52.3047 33.8889 52.2038C29.8649 48.8579 26.0653 45.2778 22.3142 41.6003C16.4568 35.8577 10.5659 30.0758 5.87563 23.3274C3.85549 20.4208 2.01496 16.7027 3.59707 12.9882C5.4076 8.73737 9.90279 5.07349 13.9756 3.17331C15.2979 2.89446 16.6703 2.96898 17.9546 3.38935C19.705 4.57894 21.3101 5.96922 22.7374 7.53185C24.2668 9.20688 25.6533 11.4595 24.9297 13.7211C23.9126 16.8999 19.2005 18.5209 19.3099 21.7934C19.5289 23.1941 20.2636 24.4622 21.3698 25.3489C26.995 31.0676 32.7165 36.6895 38.5341 42.2144C39.1139 42.8605 39.8439 43.3538 40.6596 43.6509C42.4223 44.1364 44.2628 42.821 45.5799 41.434C46.8971 40.047 48.1809 38.4078 50.0022 37.9316C52.0631 37.3927 54.0766 38.5465 55.6449 39.8547C57.4176 41.3345 58.9641 43.0657 60.2353 44.9935C60.7489 45.6304 61.0196 46.4291 60.9989 47.247C60.8667 47.885 60.579 48.4805 60.1614 48.9806C56.794 53.6799 51.9359 59.6914 45.5044 59.0901C40.8224 58.6523 37.6347 55.3686 34.2519 52.5082Z'
                stroke={'white'}
                strokeWidth='2'
                strokeMiterlimit='10'
              />
              <path
                d='M56.9019 25.8026C56.9019 22.8082 56.3121 19.843 55.1662 17.0764C54.0202 14.3099 52.3406 11.7961 50.2232 9.67873C48.1057 7.5613 45.592 5.88167 42.8254 4.73574C40.0589 3.5898 37.0937 2.99999 34.0992 3'
                stroke={'white'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M45.5007 25.6648C45.5007 22.6775 44.314 19.8126 42.2017 17.7003C40.0894 15.588 37.2245 14.4014 34.2373 14.4014'
                stroke={'white'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span>+48 793 030 556</span>
          </Link>
        </li>
        <li className='list-none p-0 m-0'>
          <Link
            href={`mailto:tomasz.rosik@gmail.com`}
            className='flex items-center gap-4'>
            <svg
              width='45'
              height='30'
              viewBox='0 0 64 45'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M58.39 1H5.61C3.06397 1 1 3.06397 1 5.61V38.72C1 41.266 3.06397 43.33 5.61 43.33H58.39C60.936 43.33 63 41.266 63 38.72V5.61C63 3.06397 60.936 1 58.39 1Z'
                stroke='white'
                stroke-width='2'
                stroke-linejoin='round'
              />
              <path
                d='M5 6.33L32 22.33L59 6.33'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M24.91 18.13L5 34.33'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M39.09 18.13L59 35.33'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <span>tomasz.rosik82@gmail.com</span>
          </Link>
        </li>

        <li className='list-none p-0 m-0'>
          <Link
            href={`https://www.linkedin.com/in/tomasz-rosik-3b55381bb/`}
            target='blank'
            className='flex items-center gap-4'>
            <svg
              width='45px'
              height='45px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  d='M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z'
                  stroke='#ffffff'
                  strokeWidth={'1'}
                  stroke-linejoin='round'></path>
              </g>
            </svg>
            <span>Tomasz Rosik</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactDataWithMap;
