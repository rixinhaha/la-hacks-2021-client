import React from 'react';
import style from './index.module.css';

const SectionHeader = ({ text, icon }) => (
  <h2 className={style.title}>
    {icon}
    <span className={style.text}>{text}</span>
  </h2>
);

export default SectionHeader;
