/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from 'react';
import {
  FaComment, FaReply, FaStar,
} from 'react-icons/fa';
import { BiUpvote } from 'react-icons/bi';
import s from './index.module.css';

/* platform, text, comment, reply, upvote, link */

const HotContentCard = ({ content, style, platformIcon }) => {
  console.log('abc');

  const renderStatsWithIconList = () => {
    const categories = ['comment_count', 'retweet_count', 'upvote_count'];

    const statsElements = categories.map((cat) => {
      if (cat in content && content[cat] !== undefined) {
        let icon = <BiUpvote style={{ marginRight: 6 }} size={16} color="#a1a1a1" />;
        if (cat === 'comment_count') {
          icon = <FaComment style={{ marginRight: 6 }} size={16} color="#a1a1a1" />;
        } else if (cat === 'retweet_count') {
          icon = <FaReply style={{ marginRight: 6 }} size={16} color="#a1a1a1" />;
        }
        return (
          <div className={s.statWithIcon}>
            {icon}
            {content[cat]}
          </div>
        );
      }
      return <></>;
    });
    return <div className={s.statsIconWrapper}>{statsElements}</div>;
  };
  return (
    <div className={s.wrapper} style={style}>
      <div className={s.mainContent}>
        <div className={s.mainContentTitle}>
          {platformIcon}
          {content.user}
        </div>
        <div className={s.mainContentText}>feel like starting up brothers anyone in lets do this</div>
      </div>
      <div className={s.contentStats}>
        {renderStatsWithIconList()}
        <FaStar size={16} color="#f1dd68" />
      </div>
    </div>
  );
};

export default HotContentCard;
