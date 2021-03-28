import React from 'react';
import Sentimeter from '../../../components/charts/sentimeter';
import InfoCard from '../../../components/info-card';
import style from './index.module.css';

const SentimentContainer = ({ data }) => (
  <InfoCard
    title="Sentimeter"
    subtitle="subtitle here"
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
