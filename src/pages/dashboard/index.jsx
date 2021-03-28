/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import SectionHeader from '../../components/section-header';
import { fetchRedditData } from '../../services';
import EmotionContainer from './emotion';
import HotContent from './hot-content';
import style from './index.module.css';
import Sentiment from './sentiment';
import SentimentBreakdown from './sentiment-breakdown';
import WordContainer from './word-container';

export const PageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
};

// normalised to hundred
const emotions = [
  { type: 'angry', value: 5.33 },
  { type: 'sad', value: 6.67 },
  { type: 'happy', value: 4.77 },
  { type: 'dead', value: 1.44 },
  { type: 'joyful', value: 1.12 },
  { type: 'lmao', value: 1.05 },
  { type: 'yo', value: 0.81 },
  { type: 'tall', value: 0.39 },
];

const wordCloud = [{ word: 'Dynamite', count: 14 }, { word: 'por', count: 14 }, { word: 'million', count: 15 }, { word: 'JUNGKOOK', count: 16 }, { word: '...', count: 18 }, { word: '바디프랜드', count: 18 }, { word: 'para', count: 19 }, { word: 'YouTube', count: 20 }, { word: 'highest', count: 21 }, { word: 'charting', count: 21 }, { word: 'Act', count: 21 }, { word: '03/26', count: 21 }, { word: 'Korean', count: 22 }, { word: 'Global', count: 22 }, { word: '300', count: 22 }, { word: 'BTS_twtRT', count: 23 }, { word: 'surpassed', count: 25 }, { word: 'los', count: 26 }, { word: "'Dynamite", count: 26 }, { word: 'song', count: 27 }, { word: 'Life', count: 27 }, { word: 'BTSChartDailyx', count: 30 }, { word: 'Goes', count: 32 }, { word: 'Spotify', count: 33 }, { word: 'bts', count: 37 }, { word: 'views', count: 38 }, { word: 'que', count: 48 }, { word: '방탄소년단', count: 60 }, { word: 'BTS', count: 131 }, { word: 'BTS_twt', count: 306 }];

const sentimentBreakdown = [
  { name: 'Negative', value: 70 },
  { name: 'Mixed', value: 10 },
  { name: 'Positive', value: 14 },
];

const twitterContent = ['1373424404923785218', '1373424404923785218', '1373424404923785218', '1373424404923785218', '1373424404923785218', '1373424404923785218', '1373424404923785218'];

const redditContent = ['https://www.reddit.com/r/WhitePeopleTwitter/comments/mec01b/actually_they_stumbled_on_a_loophole_without/gsg4ycu?utm_source=share&utm_medium=web2x&context=3', 'https://www.reddit.com/r/WhitePeopleTwitter/comments/mec01b/actually_they_stumbled_on_a_loophole_without/gsg4ycu?utm_source=share&utm_medium=web2x&context=3', 'https://www.reddit.com/r/WhitePeopleTwitter/comments/mec01b/actually_they_stumbled_on_a_loophole_without/gsg4ycu?utm_source=share&utm_medium=web2x&context=3', 'https://www.reddit.com/r/WhitePeopleTwitter/comments/mec01b/actually_they_stumbled_on_a_loophole_without/gsg4ycu?utm_source=share&utm_medium=web2x&context=3', 'https://www.reddit.com/r/WhitePeopleTwitter/comments/mec01b/actually_they_stumbled_on_a_loophole_without/gsg4ycu?utm_source=share&utm_medium=web2x&context=3', 'https://www.reddit.com/r/WhitePeopleTwitter/comments/mec01b/actually_they_stumbled_on_a_loophole_without/gsg4ycu?utm_source=share&utm_medium=web2x&context=3', 'https://www.reddit.com/r/WhitePeopleTwitter/comments/mec01b/actually_they_stumbled_on_a_loophole_without/gsg4ycu?utm_source=share&utm_medium=web2x&context=3'];

const Dashboard = () => {
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      console.log('search');
    }
  };

  const params = useParams();

  useEffect(() => {
    fetchRedditData(params.searchTerm);
  }, []);

  return (
    <div className={style.container}>
      <Header />
      <div className={style.contentWrapper}>
        <h1 className={style.searchLabel}>
          You Searched
          <input onKeyUp={handleKeyUp} className={style.searchTerm} placeHolder="Search something..." />
        </h1>
        <div className={style.columnsWrapper}>
          <div className={style.column}>
            <Sentiment data={[{ value: 8 }]} />
            <SentimentBreakdown data={sentimentBreakdown} />
          </div>
          <div className={style.column}>
            <WordContainer data={wordCloud} />
            <EmotionContainer data={emotions} />
          </div>
        </div>
        <SectionHeader icon={<AiFillFire size={24} color="#FC6400" style={{ marginRight: 4 }} />} text="Top Buzz" />
        <HotContent twitterContentList={twitterContent} redditContentList={redditContent} />
      </div>
    </div>
  );
};
export default Dashboard;
