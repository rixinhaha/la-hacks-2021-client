import React from 'react';
import PieChart from '../../../components/charts/pie-chart';
import InfoCard from '../../../components/info-card';
import style from './index.module.css';

const EmotionBreakdown = ({ data }) => (
  <InfoCard
    title="Emotions Breakdown"
    subtitle="The pie chart above represents the tones/emotions detected in related content."
    style={{
      width: 700,
      marginBottom: 30,
    }}
  >
    <div className={style.wrapper}>
      <PieChart data={data} />
    </div>
  </InfoCard>
);

export default EmotionBreakdown;
