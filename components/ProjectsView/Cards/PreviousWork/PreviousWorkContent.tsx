import { projectCards } from '@/statics/projectCards';
import { projectsData } from '@/statics/projectsData';
import { AnimatePresence, motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import PreviousWorkDescription from './PreviousWorkDescription';

const mapedProjectsIds = projectsData.map((project) => project.id);

const PreviousWorkContent = ({ activeCard }: { activeCard: string }) => {
  const [currentProject, setCurrentProject] = useState(projectsData[0]);
  const [animationProjectsIds, setAnimationProjectsIds] =
    useState(mapedProjectsIds);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (activeCard === projectCards.PREVIOUSE_PROJECTS) {
      animate(
        '#previous_projects_images',
        {
          right: 0,
          bottom: 0,
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
          left: 0,
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
          bottom: 0,
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
          bottom: 0,
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
    const current = projectsData.find(
      (project) => project.id === animationProjectsIds[1]
    );

    setCurrentProject(current!);

    await animate(
      `#project_${animationProjectsIds[0]}`,
      {
        top: -40,
        left: -40,
        opacity: 0,
        filter: 'blur(15px)',
        zIndex: 10,
      },
      { duration: 0.6 }
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
        top: 30,
        left: 30,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 8,
      },
      { duration: 0.6 }
    );
    animate(
      `#project_${animationProjectsIds[3]}`,
      {
        top: 60,
        left: 60,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 7,
      },
      { duration: 0.6 }
    );
    animate(
      `#project_${animationProjectsIds[4]}`,
      {
        top: 90,
        left: 90,
        opacity: 0.8,
        filter: 'blur(0px)',
        zIndex: 6,
      },
      { duration: 0.6 }
    );
    animate(
      `#project_${animationProjectsIds[5]}`,
      {
        top: 120,
        left: 120,
        opacity: 0,
        zIndex: 0,
        filter: 'blur(0px)',
      },
      { duration: 0.6 }
    );
    animate(
      `#project_${animationProjectsIds[6]}`,
      {
        top: 120,
        left: 120,
        opacity: 0,
        zIndex: 0,
        filter: 'blur(0px)',
      },
      { duration: 0.1 }
    );
    await animate(
      `#project_${animationProjectsIds[7]}`,
      {
        top: 120,
        left: 120,
        opacity: 0,
        zIndex: 0,
        filter: 'blur(0px)',
      },
      { duration: 0.1 }
    );
    animate(
      `#project_${animationProjectsIds[0]}`,
      {
        top: 120,
        left: 120,
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
    <motion.div ref={scope} className='relative w-full'>
      <div
        id='previous_project_desc'
        className='relative overflow-hidden mt-10 max-w-[450px] w-full'>
        <PreviousWorkDescription project={currentProject} />
      </div>
      <div
        id='previous_projects_images'
        className='absolute right-0 top-7 max-w-[440px] w-full h-[330px] cursor-pointer'>
        {projectsData.map((project, index) => (
          <Image
            id={`project_${project.id}`}
            key={index}
            onClick={() => handleClick()}
            priority
            width={280}
            height={220}
            src={project.image}
            className={twMerge(
              'absolute overflow-hidden rounded-lg z-auto w-[280px] h-[220px]  shadow-2xl'
            )}
            style={{
              top: `${index * 30}px`,
              left: `${index * 30}px`,
              zIndex: 10 - index,
              opacity: index > 3 ? (index === 4 ? 0.8 : 0) : 1,
            }}
            alt={`${project.title}-${project.subtitle} image`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PreviousWorkContent;
