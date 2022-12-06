import React from 'react';
import {Text, TextProps} from 'react-native';
import {Colors, COLOR_PALLETE} from '../../constants/colorPallete';
import {TextType, TYPOGRAPHY} from '../../constants/typography';

interface Props extends TextProps {
  textType: TextType;
  color?: Colors;
}

const TextView: React.FC<Props> = props => {
  const {color = Colors.PrimaryText, textType = TextType.Subtitle} = props;
  return (
    <Text
      {...props}
      style={[
        TYPOGRAPHY[textType.valueOf()],
        {color: COLOR_PALLETE[color.valueOf()]},
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

export default TextView;
