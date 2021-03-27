import React from 'react';
import s from './index.module.css';

const InfoCard = ({
  title, children, style, subtitle,
}) => (
  <div style={style}>
    <h3 className={s.title}>{title}</h3>
    <div className={s.card}>
      <div className={s.mainContent}>
        {children}
      </div>
      {subtitle
        ? (
          <div className={s.subTitle}>
            subtitle
          </div>
        )
        : <></>}
    </div>
  </div>
);

export default InfoCard;
