/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { AiFillFacebook, AiFillTwitterSquare, AiFillGithub } from 'react-icons/ai';
import style from './index.module.css';

const Header = ({ onBack }) => (
  <nav className={style.nav}>
    <div>
      <IoArrowBackOutline
        size={24}
        style={{
          cursor: 'pointer',
        }}
        onClick={onBack}
      />

    </div>
    <div className={style.brand}>SENTIMETER.IO</div>
    <div className={style.iconGroup}>
      <a target="_blank" href="https://www.facebook.com/" rel="noreferrer"><AiFillFacebook color="rgba(0, 0, 0, 0.85)" size={24} /></a>
      <a target="_blank" href="https://twitter.com/" rel="noreferrer">
        <AiFillTwitterSquare color="rgba(0, 0, 0, 0.85)" size={24} />
      </a>
      <a target="_blank" href="https://github.com/" rel="noreferrer">
        <AiFillGithub color="rgba(0, 0, 0, 0.85)" size={24} />
      </a>
    </div>
  </nav>
);

export default Header;
