import MouseLeftButtonIcon from '../Icons/MouseLeftButtonIcon';
import MouseMiddleButtonIcon from '../Icons/MouseMiddleButtonIcon';
import MouseRightButtonIcon from '../Icons/MouseRightButtonIcon';

const mouseLegend = [
  {
    id: 'leftButton',
    text: 'rotate',
    icon: <MouseLeftButtonIcon />,
  },
  {
    id: 'rightButton',
    text: 'pan',
    icon: <MouseRightButtonIcon />,
  },
  {
    id: 'moddleButton',
    text: 'zoom',
    icon: <MouseMiddleButtonIcon />,
  },
];

const Legend = () => {
  return (
    <div className='absolute right-8 top-1/2 -translate-y-1/2 w-12 flex flex-col gap-4'>
      {mouseLegend.map((item) => (
        <div key={item.id} className='flex flex-col w-fit items-center gap-2'>
          {item.icon}
          <span className='font-normal text-sm'>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
