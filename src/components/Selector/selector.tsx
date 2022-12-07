import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Colors, COLOR_PALLETE} from '../../constants/colorPallete';
import {DIMENSIONS} from '../../constants/dimensions';
import {TextType} from '../../constants/typography';
import TextView from '../TextView';

interface Props {
  items: Array<{label: string; value: string}>;
  value: string;
  onItemSelected: (val: string) => void;
  style?: StyleProp<ViewStyle>;
}

const Selector: React.FC<Props> = props => {
  const {items, onItemSelected, value, style} = props;

  const renderItem = (item: {label: string; value: string}) => {
    const selected = item.value === value;

    return (
      <Pressable
        key={`sel_it_${item.value}`}
        style={[
          styles.item,
          {
            backgroundColor: selected
              ? COLOR_PALLETE[Colors.Primary]
              : COLOR_PALLETE[Colors.BgLight],
          },
        ]}
        onPress={() => onItemSelected(item.value)}>
        <TextView
          textType={TextType.Cta}
          color={selected ? Colors.LightText : Colors.Primary}>
          {item.label}
        </TextView>
      </Pressable>
    );
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={style}
      horizontal
      contentContainerStyle={styles.container}>
      {items.map(it => renderItem(it))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: DIMENSIONS.paddingNormal,
    height: DIMENSIONS.selectorHeight,
  },
  item: {
    paddingVertical: DIMENSIONS.paddingSmall,
    paddingHorizontal: DIMENSIONS.paddingNormal,
    marginRight: DIMENSIONS.marginSmall,
    borderWidth: DIMENSIONS.borderWidth,
    borderColor: COLOR_PALLETE[Colors.Primary],
    borderRadius: DIMENSIONS.radiusLarge,
  },
});
export default Selector;
