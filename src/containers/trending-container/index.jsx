import React from 'react';
import TopicCardsList from '../../components/topic-cards-list';

const TrendingContainer = ({ topics }) => (
  <div>
    <TopicCardsList topics={topics} />
  </div>
);

export default TrendingContainer;
