/* eslint-disable max-len */
import axios from 'axios';

const POP_POST_COUNT = 8;
const API_ROOT = 'http://34.70.35.195';
const API_TWITTER_SEARCH = `${API_ROOT}/sentiment_search/twitter`;
const API_REDDIT_SEARCH = `${API_ROOT}/sentiment_search/reddit`;
const API_TRENDING = `${API_ROOT}/trending`;

export const fetchTwitterData = async (searchTerm) => {
  const res = await axios.post(API_TWITTER_SEARCH, {
    search_term: searchTerm,
    popular_count: POP_POST_COUNT,
  });
  res.platform = 'twitter';
  return res;
};

export const fetchRedditData = async (searchTerm) => {
  const res = await axios.post(API_REDDIT_SEARCH, {
    search_term: searchTerm,
    popular_count: POP_POST_COUNT,
  });
  res.platform = 'reddit';
  return res;
};
export const fetchData = async (searchTerm) => {
  const responseList = await Promise.all([fetchRedditData(searchTerm), fetchTwitterData(searchTerm)]);
  return { twitterData: responseList[1].data, redditData: responseList[0].data };
};

export const fetchRelatedSearches = async (searchTerm) => {
  const res = await axios.post(API_TRENDING, {
    search_term: searchTerm,

  });
  return res.data;
};
