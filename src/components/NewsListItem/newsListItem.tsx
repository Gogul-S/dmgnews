import moment from 'moment';
import React from 'react';
import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Colors, COLOR_PALLETE} from '../../constants/colorPallete';
import {DIMENSIONS} from '../../constants/dimensions';
import {FALLBACK_IMAGE} from '../../constants/global';
import {TextType} from '../../constants/typography';
import TextView from '../TextView';

interface Props {
  newsData: any;
  imageHeight?: number;
  style?: StyleProp<ViewStyle>;
}

const NewsListItem: React.FC<Props> = props => {
  const {newsData, style, imageHeight = 150} = props;

  return (
    <View style={[styles.container, style]}>
      <Image
        style={[styles.newsImage, {height: imageHeight}]}
        source={{
          uri: !!newsData.multimedia[0]?.url
            ? `http://www.nytimes.com/${newsData.multimedia[0]?.url}`
            : FALLBACK_IMAGE,
        }}
      />
      <TextView
        style={styles.caption}
        textType={TextType.Caption2}
        numberOfLines={2}>
        {newsData.headline.main}
      </TextView>
      <TextView
        style={styles.snippet}
        textType={TextType.Body}
        color={Colors.SecondaryText}
        numberOfLines={3}>
        {newsData.snippet}
      </TextView>
      <TextView style={styles.date} textType={TextType.Caption3}>
        {moment(newsData.pub_date).format('DD MMM YYYY')}
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
  (pre, curr) => pre.newsData._id === curr.newsData._id,
);
