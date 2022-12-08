import {useInfiniteQuery} from '@tanstack/react-query';
import datasources from '../service';
import {NewsEntity} from '../types/news';

const KEYS = {
  NEWS_LIST_QUERY: 'NEWS_LIST_QUERY',
};

export const useFetchNewsQuery = (query: string) => {
  return useInfiniteQuery<NewsEntity[], string>({
    queryKey: [KEYS.NEWS_LIST_QUERY],
    queryFn: ({pageParam}) => {
      return datasources.news.getNewsList(query, pageParam || 0);
    },
    keepPreviousData: true,
  });
};
