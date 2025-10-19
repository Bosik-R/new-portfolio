import { aboutMeData } from '../../statics/aboutMeData';
import LinkedInIcon from '../Icons/LinkedInIcon';
import Link from 'next/link';
import GitHubIcon from '../Icons/GitHubIcon';
import CVIcon from '../Icons/CVIcon';

const socialLinks = [
  {
    id: 'cv',
    href: 'https://drive.google.com/file/d/1TeyMp8I0H1dmrz4ZJi_CzXN3cqYxmysk/view?usp=drive_link',
    icon: <CVIcon />,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/tomasz-rosik-3b55381bb/',
    icon: <LinkedInIcon />,
  },
  {
    id: 'github',
    href: 'https://github.com/Bosik-R',
    icon: <GitHubIcon />,
  },
];

const AboutMeContent = () => {
  const { lineTwo, lineThree, desc } = aboutMeData;
  return (
    <div className='relative max-w-[50%] w-full h-full flex flex-col items-center px-9 py-12 overflow-hidden text-[#f0f0f0]'>
      <div className='w-fit text-left'>
        <h2 className='pb-1 text-gradient'>{lineTwo}</h2>
        <h2 className='pb-10 text-gradient'>{lineThree}</h2>
      </div>
      <div className='glass-card p-12 max-w-3xl text-lg text-justify flex flex-col gap-5 mb-10'>
        {desc.map((text, index) => (
          <p key={index} className='text-lg'>
            {text}
          </p>
        ))}
      </div>
      <div className='w-full flex justify-center gap-10'>
        {socialLinks.map((link) => (
          <Link key={link.id} href={link.href} target='_blank'>
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutMeContent;
