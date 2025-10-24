'use client';

import { useMediaQuery } from '@uidotdev/usehooks';
import { projectCards } from '../../../../statics/projectCards';
import { useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const imagesArray = [
  { id: '1', path: 'manager_1.webp' },
  { id: '2', path: 'manager_2.webp' },
  { id: '3', path: 'manager_3.webp' },
];

const mapedImagesIds = imagesArray.map((image) => image.id);

const ManagerImageWrapper = ({ activeCard }: { activeCard: string }) => {
  const [scope, animate] = useAnimate();
  const [animationImagesIds, setAnimationImagesIds] = useState(mapedImagesIds);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 1536px)');

  useEffect(() => {
    if (activeCard === projectCards.CURRENT_WORKING_ON) {
      animate(
        scope.current,
        {
          top: isSmallDevice ? 77 : 120,
          left: isSmallDevice ? 290 : 175,
          rotateX: 2,
          rotateY: 4,
          rotateZ: 2,
          scale: 1,
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
      `#current_work_image_${animationImagesIds[0]}`,
      {
        left: -30,
        top: -5,
        zIndex: 4,
        filter: 'blur(5px)',
      },
      { duration: 0.6 }
    );
    await animate(
      `#current_work_image_${animationImagesIds[0]}`,
      { opacity: 0 },
      { duration: 0.3, delay: 0.3 }
    );
    animate(
      `#current_work_image_${animationImagesIds[1]}`,
      { left: 0, top: 0, opacity: 1, zIndex: 3, filter: 'blur(0px)' },
      { duration: 0.5 }
    );
    animate(
      `#current_work_image_${animationImagesIds[2]}`,
      { left: 30, top: 5, opacity: 1, zIndex: 2, filter: 'blur(0px)' },
      { duration: 0.5 }
    );
    await animate(
      `#current_work_image_${animationImagesIds[0]}`,
      { left: 70, top: 15, opacity: 0, zIndex: 1, filter: 'blur(7px)' },
      { duration: 0.1 }
    );
    animate(
      `#current_work_image_${animationImagesIds[0]}`,
      { left: 60, top: 10, opacity: 1, zIndex: 1, filter: 'blur(2px)' },
      { duration: 0.4, delay: 0.2 }
    );

    const cutOut = animationImagesIds[0];
    const newArray = animationImagesIds.slice(1);
    const added = [...newArray, cutOut];

    setAnimationImagesIds(added);
  };

  return (
    <div
      ref={scope}
      id='imagesWrapper'
      className='absolute w-[350px] 2xl:w-[400px] h-[280px] 2xl:h-[320px] cursor-pointer z-50'>
      {imagesArray.map((image, index) => (
        <Image
          id={`current_work_image_${image.id}`}
          key={index}
          onClick={() => handleImageClick()}
          priority
          width={370}
          height={300}
          src={`/images/${image.path}`}
          className='absolute overflow-hidden rounded-lg project_images_shadow'
          alt='scrapi image'
          style={{
            top: `${index * 5}px`,
            left: `${index * 30}px`,
            zIndex: 3 - index,
            filter: index === 2 ? 'blur(7px)' : 'blur(0px)',
          }}
        />
      ))}
    </div>
  );
};

export default ManagerImageWrapper;
