'use client';
import { projectCards } from '../../../../statics/projectCards';
import { previousProjectsData } from '../../../../statics/projectsData';
import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import PreviousWorkDescription from './PreviousWorkDescription';
import { useMediaQuery } from 'react-responsive';

const mapedProjectsIds = previousProjectsData.map((project) => project.id);

const PreviousWorkContent = ({ activeCard }: { activeCard: string }) => {
  const [currentProject, setCurrentProject] = useState(previousProjectsData[0]);
  const [animationProjectsIds, setAnimationProjectsIds] =
    useState(mapedProjectsIds);
  const [scope, animate] = useAnimate();
  const isSmallDevice = useMediaQuery({ maxWidth: 1536 });

  useEffect(() => {
    if (activeCard === projectCards.PREVIOUSE_PROJECTS) {
      animate(
        '#previous_projects_images',
        {
          right: isSmallDevice ? 120 : 25,
          bottom: isSmallDevice ? 5 : 60,
          rotateX: 2,
          rotateY: 4,
          rotateZ: 2,
          scale: 1,
        },
        { duration: 0.5 }
      );
      animate(
        '#previous_project_desc',
        {
          left: 30,
        },
        { duration: 0.4, delay: 0.4 }
      );
    } else if (activeCard === projectCards.CURRENT_WORKING_ON) {
      animate(
        '#previous_project_desc',
        {
          left: -550,
        },
        { duration: 0.2 }
      );

      animate(
        '#previous_projects_images',
        {
          right: 0,
          bottom: -70,
          rotateX: 38,
          rotateY: 7,
          rotateZ: 2,
          scale: 0.7,
        },
        { duration: 0.4 }
      );
    } else {
      animate(
        '#previous_project_desc',
        {
          left: -550,
        },
        { duration: 0.2 }
      );
      animate(
        '#previous_projects_images',
        {
          right: 0,
          bottom: -70,
          rotateX: 38,
          rotateY: 7,
          rotateZ: 2,
          scale: 0.7,
        },
        { duration: 0.4 }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  const handleClick = async () => {
    if (activeCard !== projectCards.PREVIOUSE_PROJECTS) return;
    const current = previousProjectsData.find(
      (project) => project.id === animationProjectsIds[1]
    );

    setCurrentProject(current!);

    animate(
      `#project_${animationProjectsIds[0]}`,
      {
        top: isSmallDevice ? -5 : -40,
        left: isSmallDevice ? -60 : -40,
        opacity: 1,
        filter: 'blur(15px)',
        zIndex: 10,
      },
      { duration: 0.6 }
    );
    await animate(
      `#project_${animationProjectsIds[0]}`,
      {
        opacity: 0,
      },
      { duration: 0.3, delay: 0.3 }
    );
    animate(
      `#project_${animationProjectsIds[1]}`,
      {
        top: 0,
        left: 0,
        opacity: 1,
        zIndex: 9,
        filter: 'blur(0px)',
      },
      { duration: 0.6 }
    );
    animate(
      `#project_${animationProjectsIds[2]}`,
      {
        top: isSmallDevice ? 5 : 30,
        left: isSmallDevice ? 45 : 30,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 8,
      },
      { duration: 0.6 }
    );
    animate(
      `#project_${animationProjectsIds[3]}`,
      {
        top: isSmallDevice ? 10 : 60,
        left: isSmallDevice ? 90 : 60,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 7,
      },
      { duration: 0.6 }
    );
    animate(
      `#project_${animationProjectsIds[4]}`,
      {
        top: isSmallDevice ? 15 : 90,
        left: isSmallDevice ? 125 : 90,
        opacity: 1,
        filter: 'blur(1px)',
        zIndex: 6,
      },
      { duration: 0.6 }
    );
    animate(
      `#project_${animationProjectsIds[5]}`,
      {
        top: isSmallDevice ? 20 : 120,
        left: isSmallDevice ? 170 : 120,
        opacity: 0.9,
        zIndex: 5,
        filter: 'blur(1px)',
      },
      { duration: 0.6 }
    );
    animate(
      `#project_${animationProjectsIds[6]}`,
      {
        top: isSmallDevice ? 25 : 150,
        left: isSmallDevice ? 215 : 150,
        opacity: 0,
        zIndex: 0,
        filter: 'blur(0px)',
      },
      { duration: 0.1 }
    );
    await animate(
      `#project_${animationProjectsIds[7]}`,
      {
        top: isSmallDevice ? 25 : 150,
        left: isSmallDevice ? 215 : 150,
        opacity: 0,
        zIndex: 0,
        filter: 'blur(0px)',
      },
      { duration: 0.1 }
    );
    animate(
      `#project_${animationProjectsIds[0]}`,
      {
        top: isSmallDevice ? 25 : 150,
        left: isSmallDevice ? 215 : 150,
        opacity: 0,
        zIndex: 0,
        filter: 'blur(0px)',
      },
      { duration: 0.1 }
    );

    const cutOut = animationProjectsIds[0];
    const newArray = animationProjectsIds.slice(1);
    const added = [...newArray, cutOut];
    setAnimationProjectsIds(added);
  };

  return (
    <motion.div ref={scope} className='relative w-full h-full'>
      <div
        id='previous_project_desc'
        className='relative overflow-hidden pt-5 2xl:pt-8 max-w-[48%] w-full h-full'>
        <PreviousWorkDescription project={currentProject} />
      </div>
      <div
        id='previous_projects_images'
        className='absolute max-w-[370px] 2xl:max-w-[440px] w-full h-[260px] 2xl:h-[330px] cursor-pointer'>
        {previousProjectsData.map((project, index) => (
          <motion.div
            initial={{
              top: index * (isSmallDevice ? 5 : 30),
              left: index * (isSmallDevice ? 45 : 30),
            }}
            style={{
              zIndex: 10 - index,
              opacity: index > 3 ? (index === 4 ? 0.8 : 0) : 1,
            }}
            className='absolute overflow-hidden rounded-lg project_images_shadow z-auto w-[290px] h-[235px]'
            key={index}
            id={`project_${project.id}`}>
            <Image
              onClick={() => handleClick()}
              priority
              fill={true}
              src={project.image}
              className={twMerge(
                'rounded-lg absolute top-0 left-0 bottom-0 right-0'
              )}
              alt={`${project.title}-${project.subtitle} image`}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PreviousWorkContent;
