import { aboutMeData, socialLinks } from '../../statics/aboutMeData';
import LinkedInIcon from '../Icons/LinkedInIcon';
import Link from 'next/link';
import GitHubIcon from '../Icons/GitHubIcon';
import CVIcon from '../Icons/CVIcon';

const socialLinksComponents = [
  {
    id: 'cv',
    href: socialLinks.cv,
    icon: <CVIcon />,
  },
  {
    id: 'linkedin',
    href: socialLinks.linkedIn,
    icon: <LinkedInIcon />,
  },
  {
    id: 'github',
    href: socialLinks.github,
    icon: <GitHubIcon />,
  },
];

const AboutMeContent = () => {
  const { lineTwo, lineThree, desc } = aboutMeData;
  return (
    <div className='relative max-w-[50%] w-full h-full flex flex-col items-center px-9 pb-8 overflow-hidden text-[#f0f0f0]'>
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
        {socialLinksComponents.map((link) => (
          <Link key={link.id} href={link.href} target='_blank'>
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutMeContent;
