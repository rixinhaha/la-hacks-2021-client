/* eslint-disable max-len */
import React from 'react';
import {
  FaComment, FaReply, FaTwitter, FaStar,
} from 'react-icons/fa';
import { BiUpvote } from 'react-icons/bi';
import style from './index.module.css';

/* platform, text, comment, reply, upvote, link */

const HotContentCard = () => {
  console.log('abc');

  const platformIcon = <FaTwitter style={{ marginRight: 2 }} color="rgb(29, 161, 242)" size={16} />;

  const renderStatsWithIconList = () => {
    const categories = ['comment', 'reply', 'upvote'];

    const statsElements = categories.map((cat) => {
      let icon = <BiUpvote style={{ marginRight: 6 }} size={16} color="#a1a1a1" />;
      if (cat === 'comment') {
        icon = <FaComment style={{ marginRight: 6 }} size={16} color="#a1a1a1" />;
      } else if (cat === 'reply') {
        icon = <FaReply style={{ marginRight: 6 }} size={16} color="#a1a1a1" />;
      }
      return (
        <div className={style.statWithIcon}>
          {icon}
          test
        </div>
      );
    });
    return <div className={style.statsIconWrapper}>{statsElements}</div>;
  };
  return (
    <div className={style.wrapper}>
      <div className={style.mainContent}>
        <div className={style.mainContentTitle}>
          {platformIcon}
          @vincent
        </div>
        <div className={style.mainContentText}>feel like starting up brothers anyone in lets do this</div>
      </div>
      <div className={style.contentStats}>
        {renderStatsWithIconList()}
        <FaStar size={16} color="#f1dd68" />
      </div>
    </div>
  );
};

export default HotContentCard;
