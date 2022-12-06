import React from 'react';
import {SafeAreaView, View} from 'react-native';
import TextView from '../../components/TextView';
import {TextType} from '../../constants/typography';
import {styles} from './styles';

interface Props {}

const NewsListScreen: React.FC<Props> = props => {
  return (
    <SafeAreaView style={styles.root}>
      <TextView style={{alignSelf: 'center'}} textType={TextType.Caption}>
        Hello
      </TextView>
    </SafeAreaView>
  );
};
export default NewsListScreen;
