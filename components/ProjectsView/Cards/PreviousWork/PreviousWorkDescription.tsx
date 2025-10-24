import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export type ProjectTypes = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  text: string;
  tech: string[];
  link?: string;
};

const PreviousWorkDescription = ({ project }: { project: ProjectTypes }) => {
  return (
    <AnimatePresence mode='wait'>
      {project && (
        <motion.div
          key={project.id}
          className='relative bold text-3xl w-full h-full pr-3 flex flex-col justify-between'
          initial={{ left: -550, opacity: 0, filter: 'blur(5px)' }}
          animate={{
            left: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.6 },
          }}
          exit={{
            left: -550,
            opacity: 0,
            filter: 'blur(5px)',
            transition: { duration: 0.6 },
          }}>
          <div>
            <h5 className='mb-5 font-semibold'>{project.title}</h5>
            <p className='mb-5'>{project.text}</p>
          </div>
          <div>
            {project.link ? (
              <Link
                href={project.link}
                className='underline border-b text-base pb-4'
                target='_blank'>
                view page
              </Link>
            ) : null}
            <h6 className='text-xs border-b-2 border-gray-400 pb-2 mb-4 uppercase text-[#f0f0f0]'>
              tech used
            </h6>
            <div className='flex gap-3 flex-wrap text-[#f0f0f0] pb-6'>
              {project.tech.map((item, index) => (
                <span
                  key={index}
                  className='skill-glass-chip px-3 py-1 w-fit text-xs'>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviousWorkDescription;
