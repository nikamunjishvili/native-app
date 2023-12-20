import ChechIcon from './checkIcon';
import LeftIcon from './LeftAngel';
import Facebook from './Facebook';
import Google from './Google';
import Apple from './Apple';
import Home from './Home';
import User from './Profile';
import Chat from './Chat';

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

    case 'facebook': {
      Icon = Facebook;
      break;
    }

    case 'google': {
      Icon = Google;
      break;
    }
    case 'apple': {
      Icon = Apple;
      break;
    }
    case 'home': {
      Icon = Home;
      break;
    }
    case 'user': {
      Icon = User;
      break;
    }
    case 'chat': {
      Icon = Chat;
      break;
    }

    default: {
      return null;
    }
  }

  return <Icon color={color} width={width} height={height} />;
}

export default IconComponent;
