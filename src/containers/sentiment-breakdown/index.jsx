import React from 'react';
import BarChart from '../../components/charts/bar-chart';
import InfoCard from '../../components/info-card';
import style from './index.module.css';

const SentimentBreakdown = () => (
  <InfoCard
    title="Sentiment Breakdown"
    subtitle="subtitle here"
    style={{
      width: 584,
    }}
  >
    <div className={style.wrapper}>
      <BarChart />
    </div>
  </InfoCard>
);

export default SentimentBreakdown;
