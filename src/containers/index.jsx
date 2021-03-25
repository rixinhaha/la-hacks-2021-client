import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import LayoutCard from '../components/layout-card';
import style from './index.module.css';
import TrendingContainer from './trending-container';
import SearchContainer from './search-container';

const { Header, Content, Footer } = Layout;

const MainContainer = () => {
  const [trendingTopics] = useState(['K-Pop', 'Jungkook', 'Blackpink']);

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className={style.searchCard}>
        <SearchContainer />
      </Content>
      <div className={style.postsWrapper}>
        <div className={style.postsCard}>
          <TrendingContainer topics={trendingTopics} />
        </div>
        <div className={style.postsCard}>
          <LayoutCard />
        </div>
      </div>
      <Content className={style.widgetCard} />
      <div className={style.postsWrapper}>
        <div className={style.postsCard}>
          <TrendingContainer topics={trendingTopics} />
        </div>
        <div className={style.postsCard}>
          <LayoutCard />
        </div>
      </div>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default MainContainer;
