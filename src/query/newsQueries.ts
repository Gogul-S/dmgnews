import {useQuery} from 'react-query';
import datasources from '../service';
import {NewsEntity} from '../types/news';

const KEYS = {
  NEWS_LIST_QUERY: 'NEWS_LIST_QUERY',
};

export const useFetchNewsQuery = (page: number) => {
  return useQuery<NewsEntity[], string>({
    queryKey: [KEYS.NEWS_LIST_QUERY, page],
    queryFn: () => datasources.news.getNewsList('india', page),
    keepPreviousData: true,
  });
};
