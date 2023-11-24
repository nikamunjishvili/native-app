import ChechIcon from './checkIcon';
import LeftIcon from './LeftAngel';

export type iconsName = 'checkIcon';

interface IconsProps {
  iconName: iconsName | any;
  color?: string;
  width?: number;
  height?: number;
}

function IconComponent({iconName, color, width, height}: IconsProps) {
  let Icon = null;

  switch (iconName) {
    case 'checkIcon': {
      Icon = ChechIcon;
      break;
    }
    case 'leftAngel': {
      Icon = LeftIcon;
      break;
    }

    default: {
      return null;
    }
  }

  return <Icon color={color} width={width} height={height} />;
}

export default IconComponent;
