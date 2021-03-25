import React from 'react';

const TopicCardsList = ({ topics }) => {
  const renderTopicCard = (topic) => (<div>{topic}</div>);

  return (
    <div>
      {topics.map((item) => renderTopicCard(item))}
    </div>
  );
};

export default TopicCardsList;
