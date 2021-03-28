/* eslint-disable max-len */
import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import Header from '../components/header';
import HotContentCard from '../components/hot-content-card';
import SectionHeader from '../components/section-header';
import style from './index.module.css';
import Sentiment from './sentiment';
import SentimentBreakdown from './sentiment-breakdown';
import TrendingContainer from './trending-container';
import WordContainer from './word-container';

export const PageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
};

const MainContainer = () => {
  console.log('test');

  return (
    <div className={style.container}>
      <Header />
      <div className={style.contentWrapper}>
        <h1 className={style.searchLabel}>
          You searched
          <span className={style.searchTerm}>BTS</span>
        </h1>
        <div className={style.columnsWrapper}>
          <div className={style.column}>
            <Sentiment data={[{ value: 7.5 }]} />
            <SentimentBreakdown />
          </div>
          <div className={style.column}>
            <WordContainer />
          </div>
        </div>
        <SectionHeader icon={<AiFillFire size={24} color="#FC6400" style={{ marginRight: 4 }} />} text="Top Buzz" />
        <div><HotContentCard /></div>
        <div className={style.contentWrapper}>
          <TrendingContainer topics={[
            'bts grammys',
            'bts members',
            'bts jungkook',
            'bts jimin',
            'bts v',
            'bts suga',
            'bts rm',
            'bts jin',
            'bts jhope']}
          />
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
