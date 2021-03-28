/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBox from '../../components/search-box';
import style from './index.module.css';

const Home = () => {
  const history = useHistory();
  const handleSearch = (searchTerm) => {
    history.push(`/search/${searchTerm}`);
  };

  return (
    <div className={style.container}>
      <div className={style.contentWrapper}>
        <h1 className={style.mainHeader}>
          Internet's opinion
        </h1>
        <SearchBox onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;
