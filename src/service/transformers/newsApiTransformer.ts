import moment from 'moment';
import {NewsEntity} from '../../types/news';
import {FALLBACK_IMAGE} from '../../constants/global';

const ASSET_BASE_URL = 'http://www.nytimes.com';

export const transformNewsApi = (data: any): NewsEntity => {
  return {
    id: data._id,
    caption: data.headline.main,
    snippet: data.snippet,
    dateLabel: moment(data.pub_date).format('DD MMM YYYY'),
    imageurl: !!data.multimedia[0]?.url
      ? `${ASSET_BASE_URL}/${data.multimedia[0]?.url}`
      : FALLBACK_IMAGE,
    timestamp: data.pub_date,
  };
};
