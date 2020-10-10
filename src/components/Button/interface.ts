import { Colors } from 'utils/Colors';

export enum ButtonColor {
  ORANGE = 'ORANGE',
  LIGHT_ORANGE = 'LIGHT_ORANGE',
}

export const textColors = {
  [ButtonColor.ORANGE]: Colors.white,
  [ButtonColor.LIGHT_ORANGE]: Colors.orange,
};

export const backgroundColors = {
  [ButtonColor.ORANGE]: Colors.orange,
  [ButtonColor.LIGHT_ORANGE]: Colors.white,
};
