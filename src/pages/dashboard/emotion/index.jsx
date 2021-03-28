import React from 'react';
import BubbleChart from '../../../components/charts/bubble-chart';
import InfoCard from '../../../components/info-card';
import style from './index.module.css';

const EmotionBreakdown = ({ data }) => (
  <InfoCard
    title="Emotions Breakdown"
    subtitle="subtitle here"
    style={{
      width: 700,
      marginBottom: 30,
    }}
  >
    <div className={style.wrapper}>
      <BubbleChart data={data} />
    </div>
  </InfoCard>
);

export default EmotionBreakdown;
