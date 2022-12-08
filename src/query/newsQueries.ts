import {useQuery} from '@tanstack/react-query';
import datasources from '../service';
import {NewsEntity} from '../types/news';

const KEYS = {
  NEWS_LIST_QUERY: 'NEWS_LIST_QUERY',
};

/**
 *
 * useInfiniteQuery was causing some issues when used in conjuction with persist library,
 * hence not used for pagination.
 *
 * Instead a custom logic has been put into place by manipulating query keys.
 * Ideally we should use refetch to fetch data with new param or use useInfiniteQuery for pagination, and avoid query re-rendering.
 * Took this decision to manipulate keys,
 * as even in offline mode the cached data against this keys would be given to view
 * and it was very late to switch to a different state management library.
 */
export const useFetchNewsQuery = (pageNumber: number, query: string) => {
  return useQuery<NewsEntity[], string>({
    queryKey: [KEYS.NEWS_LIST_QUERY, pageNumber],
    queryFn: () => {
      return datasources.news.getNewsList(query, pageNumber);
    },
    keepPreviousData: true,
  });
};
