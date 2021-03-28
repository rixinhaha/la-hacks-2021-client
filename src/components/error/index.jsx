import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import style from './index.module.css';

const Error = () => (
  <div className={style.wrapper}>
    <BiErrorCircle size={56} />
    <h1 className={style.error}>Sorry, please try again...</h1>
  </div>
);

export default Error;
