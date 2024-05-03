import { aboutMeData } from '@/statics/aboutMeData';

const AboutMeContent = () => {
  const { lineTwo, lineThree, desc } = aboutMeData;
  return (
    <div className='max-w-[50%] w-full h-full flex flex-col items-center px-9 py-12 overflow-hidden relative text-grayLight'>
      <h1 className='pb-1'>{lineTwo}</h1>
      <h1 className='pb-10'>{lineThree}</h1>
      <p className='glass-card p-12 max-w-3xl text-xl text-justify'>{desc}</p>
      <div className='w-full'>
        <div className='w-28 h-28 cursor-pointer'></div>
      </div>
    </div>
  );
};

export default AboutMeContent;
