import React from 'react';
import WordCloud from '../../../components/charts/word-cloud';
import InfoCard from '../../../components/info-card';

import style from './index.module.css';

const WordContainer = ({ data }) => (
  <InfoCard
    title="Word Cloud"
    subtitle="The word cloud shows the most frequently occurring words used in related content."
    style={{
      width: 700,
      marginBottom: 30,
    }}
  >
    <div className={style.wrapper}>
      <WordCloud data={data} />
    </div>
  </InfoCard>
);

export default WordContainer;
