/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBox from '../../components/search-box';
import style from './index.module.css';

const Home = () => {
  const history = useHistory();
  const handleSearch = (searchTerm) => {
    history.push(`/search/${encodeURI(searchTerm)}`);
  };

  return (
    <div className={style.container}>
      <div className={style.contentWrapper}>
        <h1 className={style.mainHeader}>
          See the internet's opinion
        </h1>
        <SearchBox onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;
