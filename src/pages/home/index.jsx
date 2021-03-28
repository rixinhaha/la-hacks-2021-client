/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Header from '../../components/header';
import SearchBox from '../../components/search-box';
import style from './index.module.css';

const Home = () => {
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
  };

  return (
    <div className={style.container}>
      <Header />
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
