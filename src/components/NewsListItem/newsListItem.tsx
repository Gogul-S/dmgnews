import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors, COLOR_PALLETE} from '../../constants/colorPallete';
import {DIMENSIONS} from '../../constants/dimensions';
import {FALLBACK_IMAGE} from '../../constants/global';
import {TextType} from '../../constants/typography';
import TextView from '../TextView';

interface Props {
  newsData: any;
}

const NewsListItem: React.FC<Props> = props => {
  const {newsData} = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.newsImage}
        source={{
          uri: !!newsData.multimedia[0]?.url
            ? `http://www.nytimes.com/${newsData.multimedia[0]?.url}`
            : FALLBACK_IMAGE,
        }}
      />
      <TextView style={styles.caption} textType={TextType.Caption2}>
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
    margin: DIMENSIONS.marginNormal,
    borderColor: COLOR_PALLETE[Colors.Border],
    borderWidth: DIMENSIONS.borderWidth,
    borderRadius: DIMENSIONS.radius,
  },
  newsImage: {
    height: 150,
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

export default React.memo(NewsListItem);
