/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import s from './index.module.css';

const TopicCard = ({ topic }) => (
  <a className={s.card} href={`/search/${topic}`}>
    <div>
      <h3 className={s.body}>
        {topic}
      </h3>
    </div>
  </a>
);

const TopicCardsList = ({ topics }) => {
  const renderTopicCard = (topic) => (
    <TopicCard topic={topic} />
  );

  return (
    <div className={s.container}>
      {topics.map((item) => renderTopicCard(item))}
    </div>
  );
};

export default TopicCardsList;
