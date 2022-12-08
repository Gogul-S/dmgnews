import BaseApiResource from './baseApiResource';
import Config from 'react-native-config';
import {NewsEntity} from '../types/news';
import {transformNewsApi} from './transformers/newsApiTransformer';

class NewsApiResource extends BaseApiResource {
  constructor() {
    super(Config.NYT_BASE_URL!, {
      'api-key': Config.NYT_API_KEY,
    });
  }

  async getNewsList(searchQuery: string, page: number): Promise<NewsEntity[]> {
    return (
      this.get(`svc/search/v2/articlesearch.json?q=${searchQuery}&page=${page}`)
        .then(res => res?.response?.docs)
        // transforming response to client entity
        .then(items => items?.map((it: any) => transformNewsApi(it)))
    );
  }
}

export default NewsApiResource;
