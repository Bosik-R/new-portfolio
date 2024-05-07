import Image from 'next/image';
import React from 'react';

type ProjectTypes = {
  image: string;
  title: string;
};
const ProjectCardInactive = ({ image, title }: ProjectTypes) => {
  return (
    <article className='project-glass-card p-3 flex flex-col items-center gap-5 text-white w-full opacity-75 hover:opacity-100'>
      <Image
        src={image}
        alt={title}
        width={150}
        height={120}
        className='rounded-lg overflow-hidden'
      />
      <h6 className='text-center'>{title}</h6>
    </article>
  );
};

export default ProjectCardInactive;
