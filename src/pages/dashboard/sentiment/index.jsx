import React from 'react';
import Sentimeter from '../../../components/charts/sentimeter';
import InfoCard from '../../../components/info-card';
import style from './index.module.css';

const SentimentContainer = ({ data }) => (
  <InfoCard
    title="Sentimeter"
    subtitle={'The sentimeter analyzes the sentiment of the written content on the Internet. The higher the score, the more positive the sentiment. \n* Neutral sentiment means the content may either be low-emotion or a balanced mix of positive and negative sentiment.'}
    style={{
      width: 584,
      marginBottom: 30,
    }}
  >
    <div className={style.wrapper}>
      <Sentimeter data={data} />
    </div>
  </InfoCard>
);

export default SentimentContainer;
