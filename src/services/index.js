import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const POP_POST_COUNT = 50;
const API_ROOT = 'http://35.192.60.127';
const API_TWITTER_SEARCH = `${API_ROOT}/sentiment_search/twitter`;
const API_REDDIT_SEARCH = `${API_ROOT}/sentiment_search/reddit`;

// eslint-disable-next-line max-len
export const computeAggregate = (scoreA, scoreB, validCountA, validCountB) => (scoreA + scoreB) / (validCountA + validCountB);

export const fetchTwitterData = async (searchTerm) => {
  const res = await axios.post(API_TWITTER_SEARCH, {
    search_term: searchTerm,
    popular_count: POP_POST_COUNT,
  });
  console.log(res);
};

export const fetchRedditData = async (searchTerm) => {
  const res = await axios.post(API_REDDIT_SEARCH, {
    search_term: searchTerm,
    popular_count: POP_POST_COUNT,
  });
  console.log(res);
};
