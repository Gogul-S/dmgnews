import {useQuery} from '@tanstack/react-query';
import datasources from '../service';
import {NewsEntity} from '../types/news';

const KEYS = {
  NEWS_LIST_QUERY: 'NEWS_LIST_QUERY',
};

export const useFetchNewsQuery = (pageNumber: number, query: string) => {
  return useQuery<NewsEntity[], string>({
    queryKey: [KEYS.NEWS_LIST_QUERY, pageNumber],
    queryFn: () => {
      return datasources.news.getNewsList(query, pageNumber);
    },
    keepPreviousData: true,
  });
};
