import Image from 'next/image';

type ProjectCardActiveProps = {
  project: {
    id: number;
    image: string;
    title: string;
    subtitle?: string;
    text: string;
    tech: string[];
  };
};
const ProjectCardActive = ({ project }: ProjectCardActiveProps) => {
  const subtitle = project?.subtitle ? (
    <span className='font-bold'>{` / ${project.subtitle}`}</span>
  ) : null;

  return (
    <div className='project-glass-card p-5 text-white flex gap-5'>
      <Image
        src={project.image}
        alt='tamtu'
        width={300}
        height={240}
        className='rounded-lg'
      />
      <div className='flex flex-col justify-between gap-5 h-full'>
        <div className='mb-10'>
          <h6 className='pb-4'>
            {project.title}
            {subtitle}
          </h6>
          <p>{project.text}</p>
        </div>
        <div className='flex gap-3 flex-wrap'>
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
