import React from 'react';
import LayoutCard from '../../components/layout-card';
import TopicCardsList from '../../components/topic-cards-list';

const TrendingContainer = ({ topics }) => (
  <LayoutCard>
    <TopicCardsList topics={topics} />
  </LayoutCard>
);

export default TrendingContainer;
