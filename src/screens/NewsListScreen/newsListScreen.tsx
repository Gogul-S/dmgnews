import {useQueryClient} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  ViewStyle,
} from 'react-native';
import NewsListItem from '../../components/NewsListItem';
import Selector from '../../components/Selector';
import {DIMENSIONS} from '../../constants/dimensions';
import {useFetchNewsQuery} from '../../query/newsQueries';
import {NewsEntity} from '../../types/news';
import {styles} from './styles';

interface Props {}

const GRID_IMAGE_HEIGHT = 90;
const LIST_IMAGE_HEIGHT = 150;

// this can be also made dynamic; not implementing it as it is out of scope
const gridColumns = 2;
const gridMarginOffset = DIMENSIONS.marginNormal;

const windowWidth = Dimensions.get('window').width;

// static 2 is start and end margin offset
const gridWidth =
  (windowWidth - (gridColumns / 2 + 2) * gridMarginOffset) / gridColumns;

const DISPLAY_OPTIONS = [
  {value: 'list', label: 'List'},
  {value: 'grid', label: 'Grid'},
];

// map of styles to layout items
// can add other layout styles as well here
const layoutStyleMap = {
  list: {
    marginTop: DIMENSIONS.marginNormal,
    marginHorizontal: DIMENSIONS.marginNormal,
  },
  grid: {
    width: gridWidth,
    marginStart: DIMENSIONS.marginNormal,
  },
};

const imageHeightMap = {
  list: LIST_IMAGE_HEIGHT,
  grid: GRID_IMAGE_HEIGHT,
};

const NewsListScreen: React.FC<Props> = props => {
  const [displayMode, setDisplayMode] = useState<'list' | 'grid'>('list');
  const [newsItems, setNewsItems] = useState<NewsEntity[]>([]);

  const [pageNumber, setPageNumber] = useState(0);
  const customStyleObj: ViewStyle = layoutStyleMap[displayMode];

  const queryClient = useQueryClient();

  const {data, isFetching, status} = useFetchNewsQuery(pageNumber, 'india');

  const renderNewsItem = ({item}: ListRenderItemInfo<NewsEntity>) => {
    return (
      <NewsListItem
        newsData={item}
        style={customStyleObj}
        imageHeight={imageHeightMap[displayMode]}
      />
    );
  };

  useEffect(() => {}, [pageNumber]);

  const onEndReached = () => {
    if (!isFetching) {
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setNewsItems([...newsItems, ...data]);
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.root}>
      <Selector
        items={DISPLAY_OPTIONS}
        value={displayMode}
        onItemSelected={val => setDisplayMode(val as any)}
        style={styles.viewSwitcher}
      />
      <FlatList
        key={displayMode} // to re-render on layout change
        data={newsItems}
        extraData={displayMode} // to re-render on layout change
        numColumns={displayMode === 'grid' ? gridColumns : 1}
        keyExtractor={it => it.id.toString()}
        renderItem={renderNewsItem}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
      />
      {isFetching && <ActivityIndicator />}
    </SafeAreaView>
  );
};
export default NewsListScreen;
