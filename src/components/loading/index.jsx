import React from 'react';
import ReactLoading from 'react-loading';
import style from './index.module.css';

const Loading = () => (
  <div className={style.wrapper}>
    <ReactLoading
      type="bars"
      color="#111"
      height={100}
      width={100}
    />
  </div>
);

export default Loading;
