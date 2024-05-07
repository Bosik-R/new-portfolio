'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCardInactive from './ProjectCardInactive';
import ProjectCardActive from './ProjectCardActive';
import { projectsData } from '@/statics/projectsData';
import '../../styles/projectsGrid.css';

const ProjectsContent = () => {
  const [projectsArray, setProjectsArray] = useState(projectsData);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const mapNewArray = (projectId: number) => {
    const selectedProject = projectsArray.find(
      (project) => project.id === projectId
    );
    const arr = projectsArray.filter((project) => project.id !== projectId);

    if (selectedProject) {
      const newArray = [selectedProject, ...arr];

      setProjectsArray(newArray);
    }
  };

  //TODO add scroll to top after selecting project (usefull in mobile)
  const handleSelectProject = (projectId: number) => {
    if (selectedProjectId === projectId) {
      setSelectedProjectId(null);
    } else {
      setSelectedProjectId(projectId);
    }
  };

  useEffect(() => {
    if (selectedProjectId) {
      mapNewArray(selectedProjectId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProjectId]);

  return (
    <motion.div
      layout
      className={twMerge(
        'w-fit h-fit overflow-auto lg:overflow-hidden px-3 lg:px-14 py-2 md:pt-20 md:pb-14',
        selectedProjectId ? 'gridParentShowProject' : 'gridParent'
      )}>
      <AnimatePresence>
        {projectsArray.map((project, index) => (
          <motion.div
            onClick={() => handleSelectProject(project.id)}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { delay: 3.6, type: 'spring' },
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0.5 },
            }}
            layout
            key={project.id}
            className={twMerge(
              selectedProjectId
                ? `gridChildShowProject${index + 1}`
                : `gridChild${index + 1}`
            )}>
            {!!selectedProjectId && index === 0 ? (
              <ProjectCardActive project={project} />
            ) : (
              <ProjectCardInactive
                image={project.image}
                title={project.title}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsContent;
