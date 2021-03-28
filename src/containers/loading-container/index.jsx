import React from 'react';
import style from './index.module.css';
import Loading from '../../components/loading';

const LoadingContainer = () => (
  <div className={style.wrapper}>
    <Loading />
  </div>
);

export default LoadingContainer;
