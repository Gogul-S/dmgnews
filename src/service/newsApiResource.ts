import BaseApiResource from './baseApiResource';
import Config from 'react-native-config';

class NewsApiResource extends BaseApiResource {
  constructor() {
    super(Config.NYT_BASE_URL!, {
      'api-key': Config.NYT_API_KEY,
    });
  }

  async getNewsList(searchQuery: string, page: number) {
    return this.get(
      `svc/search/v2/articlesearch.json?q=${searchQuery}&page=${page}`,
    );
  }
}

export default NewsApiResource;
