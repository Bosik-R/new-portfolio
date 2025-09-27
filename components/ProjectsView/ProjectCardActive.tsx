import Image from 'next/image';
import Link from 'next/link';

type ProjectCardActiveProps = {
  project: {
    id: number;
    image: string;
    title: string;
    subtitle?: string;
    text: string;
    tech: string[];
    link?: string;
  };
};
const ProjectCardActive = ({ project }: ProjectCardActiveProps) => {
  const subtitle = project?.subtitle ? (
    <span className='font-bold'>{` / ${project.subtitle}`}</span>
  ) : null;

  return (
    <div className='project-glass-card p-5 text-white flex gap-5 h-full flex-col sm:flex-row'>
      <Image
        src={project.image}
        alt='tamtu'
        width={280}
        height={220}
        className='rounded-lg'
      />
      <div className='flex flex-col justify-between gap-3 h-auto'>
        <div className='mb-2'>
          <h6 className='pb-4'>
            {project.title}
            {subtitle}
          </h6>
          <p>{project.text}</p>
        </div>
        {project.link ? (
          <Link href={project.link} className='underline' target='_blank'>
            view page
          </Link>
        ) : null}
        <div className='flex gap-3 flex-wrap pt-2 border-t border-grayLight'>
          {project.tech.map((tech) => (
            <span key={tech} className='text-xs'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardActive;
