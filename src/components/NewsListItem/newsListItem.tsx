import React from 'react';
import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Colors, COLOR_PALLETE} from '../../constants/colorPallete';
import {DIMENSIONS} from '../../constants/dimensions';
import {TextType} from '../../constants/typography';
import {NewsEntity} from '../../types/news';
import TextView from '../TextView';

interface Props {
  newsData: NewsEntity;
  imageHeight?: number;
  style?: StyleProp<ViewStyle>;
}

const NewsListItem: React.FC<Props> = props => {
  const {newsData, style, imageHeight = 150} = props;

  const {caption, dateLabel, snippet, imageurl} = newsData;

  return (
    <View style={[styles.container, style]}>
      <Image
        style={[styles.newsImage, {height: imageHeight}]}
        source={{
          uri: imageurl,
        }}
      />
      <TextView
        style={styles.caption}
        textType={TextType.Caption2}
        numberOfLines={2}>
        {caption}
      </TextView>
      <TextView
        style={styles.snippet}
        textType={TextType.Body}
        color={Colors.SecondaryText}
        numberOfLines={3}>
        {snippet}
      </TextView>
      <TextView style={styles.date} textType={TextType.Caption3}>
        {dateLabel}
      </TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: DIMENSIONS.paddingNormal,
    borderColor: COLOR_PALLETE[Colors.Border],
    borderWidth: DIMENSIONS.borderWidth,
    borderRadius: DIMENSIONS.radius,
    marginTop: DIMENSIONS.marginNormal,
  },
  newsImage: {
    width: '100%',
    borderRadius: DIMENSIONS.radius,
  },
  caption: {
    marginTop: DIMENSIONS.marginMedium,
  },
  snippet: {
    marginTop: DIMENSIONS.marginSmall,
  },
  date: {
    marginTop: DIMENSIONS.marginSmall,
  },
});

export default React.memo(
  NewsListItem,
  (pre, curr) => pre.newsData.id === curr.newsData.id,
);
