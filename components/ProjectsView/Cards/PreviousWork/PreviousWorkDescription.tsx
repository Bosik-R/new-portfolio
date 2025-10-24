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
        <motion.ul
          className='relative bold text-3xl w-full h-fit pr-3'
          key={project.id}
          layout
          initial={{ left: -550, opacity: 0, filter: 'blur(10px)' }}
          animate={{
            left: 30,
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.6 },
          }}
          exit={{
            left: -550,
            opacity: 0,
            filter: 'blur(10px)',
            transition: { duration: 0.6 },
          }}>
          <li className='p-0 m-0'>
            <h5 className='mb-5 font-semibold'>{project.title}</h5>
          </li>
          <li className='p-0 m-0'>
            <p className='mb-5'>{project.text}</p>
          </li>
          <li className='p-0 m-0'>
            <h6 className='text-xs border-b-2 border-gray-400 pb-2 mb-4 uppercase text-[#f0f0f0]'>
              tech used
            </h6>
          </li>
          <li className='p-0 m-0 pb-7'>
            <div className='flex gap-3 flex-wrap text-[#f0f0f0]'>
              {project.tech.map((item, index) => (
                <span
                  key={index}
                  className='skill-glass-chip px-3 py-1 w-fit text-xs'>
                  {item}
                </span>
              ))}
            </div>
          </li>
          {project.link ? (
            <li>
              <Link
                href={project.link}
                className='underline border-b text-base'
                target='_blank'>
                view page
              </Link>
            </li>
          ) : null}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default PreviousWorkDescription;
