/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../../components/header';
import SectionHeader from '../../components/section-header';
import { fetchData, fetchRelatedSearches } from '../../services';
import EmotionContainer from './emotion-breakdown';
import HotContent from './hot-content';
import style from './index.module.css';
import Sentiment from './sentiment';
import SentimentBreakdown from './sentiment-breakdown';
import WordContainer from './word-container';
import { getEmotion, getSentimentBreakDown, getSentimeterScore } from './transform';
import Loading from '../../components/loading';
import Error from '../../components/error';
import TopicCardsList from '../../components/topic-cards-list';

export const PageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
};

const Dashboard = () => {
  const history = useHistory();
  const params = useParams();
  const [inputVal, setInputVal] = useState(params.searchTerm);
  const [twitterContentList, setTwitterContentList] = useState([]);
  const [redditContentList, setRedditContentList] = useState([]);
  const [wordCloudData, setWordCloudData] = useState([]);
  const [sentimentBreakdownData, setSentimentBreakdownData] = useState([]);
  const [sentimeterData, setSentimeterData] = useState([{ value: 0 }]);
  const [pageStatus, setPageStatus] = useState(PageStatus.LOADING);

  const [trendingSearchList, setTrendingSearchList] = useState([]);
  const [emotionData, setEmotionData] = useState([]);

  const getDashboardData = async (searchTerm) => {
    try {
      const { twitterData, redditData } = await fetchData(searchTerm);
      const trendingSearches = await fetchRelatedSearches(searchTerm);
      const emotionBreakdown = getEmotion(redditData.emotions, twitterData.emotions);
      const sentimentBreakdown = getSentimentBreakDown(redditData.sentiment_breakdown, twitterData.sentiment_breakdown);
      const sentimeterScore = getSentimeterScore(redditData.sentimeter, twitterData.sentimeter);
      setTrendingSearchList(trendingSearches.trends);
      setRedditContentList(redditData.buzz_list);
      setTwitterContentList(twitterData.buzz_list);
      setSentimeterData([{ value: sentimeterScore }]);
      setWordCloudData(redditData.word_cloud);
      setEmotionData(emotionBreakdown);
      setSentimentBreakdownData(sentimentBreakdown);
      setPageStatus(PageStatus.SUCCESS);
    } catch (error) {
      setPageStatus(PageStatus.ERROR);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      history.push(`/search/${e.target.value}`);
      setPageStatus(PageStatus.LOADING);
      getDashboardData(e.target.value);
    }
  };

  useEffect(() => {
    getDashboardData(inputVal);
  }, []);

  const renderPageContent = () => {
    if (pageStatus === PageStatus.INIT || pageStatus === PageStatus.LOADING) {
      return (
        <div className={style.contentWrapper}>
          <Loading />
        </div>
      );
    }
    if (pageStatus === PageStatus.SUCCESS) {
      return (
        <div className={style.contentWrapper}>
          <h1 className={style.searchLabel}>
            You Searched
            <input
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              onKeyUp={handleKeyUp}
              className={style.searchTerm}
              placeHolder="Search something..."
            />
          </h1>
          <TopicCardsList topics={trendingSearchList} />
          <div className={style.columnsWrapper}>
            <div className={style.column}>
              <Sentiment data={sentimeterData} />
              <SentimentBreakdown data={sentimentBreakdownData} />
            </div>
            <div className={style.column}>
              <WordContainer data={wordCloudData} />
              <EmotionContainer data={emotionData} />
            </div>
          </div>
          <SectionHeader icon={<AiFillFire size={24} color="#FC6400" style={{ marginRight: 4 }} />} text="Top Buzz" />
          <HotContent twitterContentList={twitterContentList} redditContentList={redditContentList} />
        </div>
      );
    }
    return <Error />;
  };

  return (
    <div className={style.container}>
      <Header onBack={() => { history.push('/'); }} />
      {renderPageContent()}
    </div>
  );
};
export default Dashboard;
