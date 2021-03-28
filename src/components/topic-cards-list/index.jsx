import React from 'react';
import s from './index.module.css';

const TopicCard = ({ topic }) => (
  <div className={s.card}>
    <h3 className={s.body}>
      {topic}
    </h3>
  </div>
);

const TopicCardsList = ({ topics }) => {
  const renderTopicCard = (topic) => (
    <TopicCard topic={topic} />
  );

  return (
    <div>
      <h3 className={s.title}>Trending Searches</h3>
      <div className={s.container}>
        {topics.map((item) => renderTopicCard(item))}
      </div>
    </div>
  );
};

export default TopicCardsList;
