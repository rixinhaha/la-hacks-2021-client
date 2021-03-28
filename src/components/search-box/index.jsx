/* eslint-disable max-len */
import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import style from './index.module.css';

const SearchBox = ({ onSearch }) => {
  const ref = useRef();

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };

  const handleClick = () => {
    onSearch(ref.current.value);
  };

  return (
    <div className={style.wrapper}>
      <span className={style.prefix}>sentimeter</span>
      <span className={style.sep}>/</span>
      <input ref={ref} className={style.input} onKeyUp={handleKeyUp} name="q" type="text" placeholder="Search..." />
      <FaSearch className={style.icon} onClick={handleClick} size={16} style={{ marginLeft: 10, marginRight: 20 }} />
    </div>
  );
};

export default SearchBox;
