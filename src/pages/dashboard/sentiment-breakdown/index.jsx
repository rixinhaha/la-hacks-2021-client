import React from 'react';
import BarChart from '../../../components/charts/bar-chart';
import InfoCard from '../../../components/info-card';
import style from './index.module.css';

const SentimentBreakdown = ({ data }) => (
  <InfoCard
    title="Sentiment Breakdown"
    subtitle="The chart above shows the proportion of positive, neutral, and negative sentiment."
    style={{
      width: 584,
    }}
  >
    <div className={style.wrapper}>
      <BarChart data={data} />
    </div>
  </InfoCard>
);

export default SentimentBreakdown;
