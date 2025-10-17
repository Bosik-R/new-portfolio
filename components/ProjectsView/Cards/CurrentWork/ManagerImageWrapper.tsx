import { projectCards } from '@/statics/projectCards';
import { useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ManagerImageWrapper = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();
  const [activeImage, setActiveImage] = useState({ current: 1, prev: 2 });

  useEffect(() => {
    if (activeCard === projectCards.CURRENT_WORKING_ON) {
      animate(
        scope.current,
        {
          left: 175,
          rotateX: 2,
          rotateY: 4,
          rotateZ: 2,
          scale: 1,
          top: 120,
        },
        { duration: 0.5 }
      );
    } else if (activeCard === projectCards.PREVIOUSE_PROJECTS) {
      animate(
        scope.current,
        {
          left: 165,
          rotateX: 38,
          rotateY: 7,
          rotateZ: 2,
          scale: 0.7,
          top: 0,
        },
        { duration: 0.4 }
      );
    } else {
      animate(
        scope.current,
        {
          left: -25,
          rotateX: 38,
          rotateY: 7,
          rotateZ: 2,
          scale: 0.7,
          top: 100,
        },
        { duration: 0.4 }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  const handleImageClick = async () => {
    if (activeCard !== projectCards.CURRENT_WORKING_ON) return;
    animate(
      `#current_work_image_${activeImage.current}`,
      { left: -20, top: -30, filter: 'blur(15px)' },
      { duration: 0.6 }
    );
    await animate(
      `#current_work_image_${activeImage.current}`,
      { opacity: 0 },
      { duration: 0.4 }
    );
    await animate(
      `#current_work_image_${activeImage.prev}`,
      { left: 0, opacity: 1, top: 0, zIndex: 20 },
      { duration: 0.2 }
    );
    await animate(
      `#current_work_image_${activeImage.current}`,
      { left: 40, top: 30, opacity: 0, zIndex: 10 },
      { duration: 0.1 }
    );
    animate(
      `#current_work_image_${activeImage.current}`,
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
      className='absolute w-[400px] h-[320px] cursor-pointer'
      onClick={() => handleImageClick()}>
      <Image
        priority
        id='current_work_image_1'
        width={370}
        height={320}
        src='/images/manager_1.png'
        className='absolute top-[0px] left-[0px] z-20 overflow-hidden rounded-lg'
        alt='scrapi image'
      />
      <Image
        priority
        id='current_work_image_2'
        width={370}
        height={320}
        src='/images/manager_1.png'
        className='absolute top-[20px] left-[20px] z-10 opacity-50 overflow-hidden rounded-lg'
        alt='scrapi image'
      />
    </div>
  );
};

export default ManagerImageWrapper;
