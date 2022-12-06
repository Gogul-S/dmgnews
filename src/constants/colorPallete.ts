import {ColorValue} from 'react-native';

export enum Colors {
  Primary = 'PRIMARY',
  PrimaryText = 'PRIMARY_TEXT',
  SecondaryText = 'SECONDARY_TEXT',
  Border = 'BORDER',
  BgLight = 'BACKGROUND_LIGHT',
  InputText = 'INPUT_TEXT',
  Error = 'ERROR',
  Inactive = 'INACTIVE',
  Text2 = 'TEXT2',
  Success = 'SUCCESS',
  MaterialBg = 'MATERIAL_BG',
}

type ColorPallete = Record<Colors, ColorValue> & {
  [key: string]: ColorValue;
};

export const COLOR_PALLETE: ColorPallete = {
  PRIMARY: '#03a9f4',
  PRIMARY_TEXT: '#000000',
  SECONDARY_TEXT: '#ffffff',
  BORDER: '#cccccc',
  BACKGROUND_LIGHT: '#ffffff',
  INPUT_TEXT: '#b5b3bd',
  ERROR: '#d40d17',
  INACTIVE: '#b3e5fc',
  TEXT2: '#4B5159',
  SUCCESS: '#30A882',
  MATERIAL_BG: '#ededed',
};
