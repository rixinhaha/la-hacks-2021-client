import React from 'react';
import { Layout, Menu } from 'antd';
import ContentCard from '../components/content-card';
import style from './index.module.css';

const { Header, Content, Footer } = Layout;

const MainContainer = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className={style.searchCard}>
      <ContentCard>
        test
      </ContentCard>
    </Content>
    <div className={style.postsWrapper}>
      <div className={style.postsCard}>
        <ContentCard />
      </div>
      <div className={style.postsCard}>
        <ContentCard />
      </div>
    </div>
    <Content className={style.widgetCard}>
      <ContentCard>
        test
      </ContentCard>
    </Content>
    <div className={style.postsWrapper}>
      <div className={style.postsCard}>
        <ContentCard />
      </div>
      <div className={style.postsCard}>
        <ContentCard />
      </div>
    </div>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);

export default MainContainer;
