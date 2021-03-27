import React from 'react';
import WordCloud from '../../components/charts/word-cloud';
import InfoCard from '../../components/info-card';
import { mockWordCloudData1 } from '../mock';
import style from './index.module.css';

const WordContainer = () => (
  <InfoCard
    title="Word Cloud"
    subtitle="subtitle here"
    style={{
      width: 700,
      marginBottom: 30,
    }}
  >
    <div className={style.wrapper}>
      <WordCloud data={mockWordCloudData1} />
    </div>
  </InfoCard>
);

export default WordContainer;
