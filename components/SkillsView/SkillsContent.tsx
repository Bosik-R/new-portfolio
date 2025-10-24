import { experienced, triedOut } from '../../statics/skillsData';

const SkillsContent = () => {
  return (
    <div className='flex flex-col gap-16 relative z-50'>
      <div>
        <h5 className='border-b-2 border-gray-400 pb-2 mb-4 uppercase text-[#f0f0f0]'>
          experienced
        </h5>
        <div className='flex gap-4 flex-wrap text-white'>
          {experienced.map((item, index) => (
            <span
              key={index}
              className='skill-glass-chip w-fit px-3 py-1 2xl:px-5 2xl:py-2 text-[12px] text-white'>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h5 className='border-b-2 border-gray-400 pb-2 mb-4 uppercase text-[#f0f0f0]'>
          tried out
        </h5>
        <div className='flex gap-3 flex-wrap text-white'>
          {triedOut.map((item, index) => (
            <span
              key={index}
              className='skill-glass-chip w-fit px-3 py-1 2xl:px-5 2xl:py-2 text-[12px]'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
