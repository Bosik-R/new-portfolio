'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, useAnimate } from 'framer-motion';
import '../../styles/projectsGrid.css';
import RecentlyFinished from './Cards/RecentlyFinished/RecentlyFinished';
import { projectCards } from '@/statics/projectCards';
import CurrentWork from './Cards/CurrentWork/CurrentWork';
import PreviousWork from './Cards/PreviousWork/PreviousWork';

const ProjectsContentNew = () => {
  const [activeCard, setActiveCard] = useState({
    prev: projectCards.RECENTLY_FINISHED,
    new: projectCards.RECENTLY_FINISHED,
  });

  const [scope, animate] = useAnimate();

  const handleAnimateOne = async () => {
    if (activeCard.new === projectCards.RECENTLY_FINISHED) return;

    animate(
      '#card3',
      { width: 340, height: 365, right: 0 },
      { duration: 0.14 }
    );
    animate('#card2', { width: 340, height: 365 }, { duration: 0.15 });
    await animate(
      '#card1',
      { width: 690, height: 750, left: 0 },
      { delay: 0.2, duration: 0.1 }
    );

    setActiveCard({
      prev: activeCard.new,
      new: projectCards.RECENTLY_FINISHED,
    });
  };

  const handleAnimateTwo = async () => {
    if (activeCard.new === projectCards.CURRENT_WORKING_ON) return;

    animate('#card1', { width: 340, height: 365, left: 0 }, { duration: 0.05 });
    animate(
      '#card3',
      { width: 340, height: 365, right: 710 },
      { duration: 0.05 }
    );
    animate(
      '#card2',
      { width: 690, height: 750 },
      { duration: 0.05, delay: 0.2, ease: 'backIn' }
    );
    setActiveCard({
      prev: activeCard.new,
      new: projectCards.CURRENT_WORKING_ON,
    });
  };

  const handleAnimateThree = async () => {
    if (activeCard.new === projectCards.PREVIOUSE_PROJECTS) return;
    const cardsMovement = () => {
      animate(
        '#card1',
        { width: 515, height: 240, left: 0 },
        { duration: 0.1 }
      );
      animate('#card2', { width: 515, height: 240 }, { duration: 0.1 });
      animate(
        '#card3',
        { width: 1050, height: 490, right: 0 },
        { delay: 0.2, duration: 0.1 }
      );
      setActiveCard({
        prev: activeCard.new,
        new: projectCards.PREVIOUSE_PROJECTS,
      });
    };
    cardsMovement();
  };

  return (
    <div ref={scope} className='relative max-w-[1050px] w-full h-[750px]'>
      <article
        id='card1'
        onClick={() => handleAnimateOne()}
        className={twMerge(
          'absolute project-glass-card text-white opacity-75 hover:opacity-100 w-full max-w-[690px] h-[750px] top-0 left-0',
          activeCard.new === projectCards.RECENTLY_FINISHED
            ? 'py-8 px-8 opacity-100 cursor-default'
            : 'py-4 px-4 cursor-pointer'
        )}>
        <RecentlyFinished activeCard={activeCard.new} />
      </article>
      <article
        id='card2'
        onClick={() => handleAnimateTwo()}
        className={twMerge(
          'absolute project-glass-card text-white opacity-75 hover:opacity-100 w-[340px] h-[365px] top-0 right-0',
          activeCard.new === projectCards.CURRENT_WORKING_ON
            ? 'opacity-100 cursor-default'
            : 'cursor-pointer'
        )}>
        <CurrentWork activeCard={activeCard.new} />
      </article>
      <article
        id='card3'
        onClick={() => handleAnimateThree()}
        className={twMerge(
          'absolute project-glass-card text-white opacity-75 hover:opacity-100 w-[340px] h-[365px] bottom-0 right-0',
          activeCard.new === projectCards.PREVIOUSE_PROJECTS
            ? 'opacity-100 cursor-default'
            : 'cursor-pointer'
        )}>
        <PreviousWork activeCard={activeCard.new} />
      </article>
    </div>
  );
};

export default ProjectsContentNew;
