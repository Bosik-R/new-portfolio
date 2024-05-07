import '../../styles/pageBgColorEllipses.css';

const FullPageBgEffect = () => {
  return (
    <div className='absolute left-0 right-0 top-0 bottom-0 overflow-hidden'>
      <span className='page-bg-ellips-1'></span>
      <span className='page-bg-ellips-2'></span>
      <span className='page-bg-ellips-3'></span>
      <span className='page-bg-ellips-4'></span>
    </div>
  );
};

export default FullPageBgEffect;
