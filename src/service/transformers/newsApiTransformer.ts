import moment from 'moment';
import {ASSET_BASE_URL} from '../../constants/global';
import {NewsEntity} from '../../types/news';

const FALLBACK_IMAGE =
  'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg';

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
