import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { AiFillFacebook, AiFillTwitterSquare, AiFillGithub } from 'react-icons/ai';
import style from './index.module.css';

const Header = () => {
  console.log('test');
  return (
    <nav className={style.nav}>
      <div><IoArrowBackOutline size={24} /></div>
      <div className={style.brand}>SENTIMETER.IO</div>
      <div className={style.iconGroup}>
        <AiFillFacebook size={24} />
        <AiFillTwitterSquare size={24} />
        <AiFillGithub size={24} />
      </div>
    </nav>
  );
};

export default Header;
