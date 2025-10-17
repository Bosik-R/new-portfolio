import { projectCards } from '@/statics/projectCards';
import { useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ScrapiImageWrapper = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();
  const [activeImage, setActiveImage] = useState({ current: 1, prev: 2 });

  useEffect(() => {
    if (activeCard === projectCards.RECENTLY_FINISHED) {
      animate(
        scope.current,
        {
          left: 0,
          rotateX: 8,
          rotateY: 4,
          rotateZ: -2,
          scale: 1,
          top: 130,
        },
        { duration: 0.5 }
      );
    } else if (activeCard === projectCards.PREVIOUSE_PROJECTS) {
      animate(
        scope.current,
        {
          left: 200,
          rotateX: 52,
          rotateY: 9,
          rotateZ: -19,
          scale: 0.5,
          top: -160,
          zIndex: 2,
        },
        { duration: 0.4 }
      );
    } else {
      animate(
        scope.current,
        {
          left: -20,
          rotateX: 52,
          rotateY: 9,
          rotateZ: -19,
          scale: 0.5,
          top: -40,
          zIndex: 2,
        },
        { duration: 0.4 }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  const handleImageClick = async () => {
    if (activeCard !== projectCards.RECENTLY_FINISHED) return;
    animate(
      `#scrapi_image_${activeImage.current}`,
      { left: 60, top: -30, filter: 'blur(15px)' },
      { duration: 0.6 }
    );
    await animate(
      `#scrapi_image_${activeImage.current}`,
      { opacity: 0 },
      { duration: 0.4 }
    );
    await animate(
      `#scrapi_image_${activeImage.prev}`,
      { left: 40, opacity: 1, top: 0, zIndex: 20 },
      { duration: 0.2 }
    );
    await animate(
      `#scrapi_image_${activeImage.current}`,
      { left: 0, top: 30, opacity: 0, zIndex: 10 },
      { duration: 0.1 }
    );
    animate(
      `#scrapi_image_${activeImage.current}`,
      { left: 20, top: 20, opacity: 0.6, filter: 'blur(0px)' },
      { duration: 0.2 }
    );

    setActiveImage({
      current: activeImage.current === 1 ? 2 : 1,
      prev: activeImage.current,
    });
  };

  return (
    <div
      ref={scope}
      id='imagesWrapper'
      className='absolute w-[270px] h-[550px] cursor-pointer'
      onClick={() => handleImageClick()}>
      <Image
        priority
        id='scrapi_image_1'
        width={247}
        height={513}
        src='/images/scrapi.webp'
        className='absolute top-[0px] left-[40px] z-20 overflow-hidden rounded-lg'
        alt='scrapi image'
      />
      <Image
        priority
        id='scrapi_image_2'
        width={247}
        height={513}
        src='/images/scrapi.webp'
        className='absolute top-[20px] left-[20px] z-10 opacity-50 overflow-hidden rounded-lg'
        alt='scrapi image'
      />
    </div>
  );
};

export default ScrapiImageWrapper;
