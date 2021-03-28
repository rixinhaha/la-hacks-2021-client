/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import s from './index.module.css';

const HotContent = ({ redditContentList, twitterContentList }) => {
  const twitterContentSplitIndex = twitterContentList.length / 2;

  // eslint-disable-next-line max-len
  const renderTwitterContentList = (tweetIdList) => tweetIdList.map((item) => <TwitterTweetEmbed key={item.id} options={{ height: 4000 }} tweetId={item.id} />);

  return (
    <div className={s.wrapper}>
      <div className={s.verticalWrapper}>
        {renderTwitterContentList(twitterContentList.slice(0, twitterContentSplitIndex))}
      </div>
      <div className={s.verticalWrapper}>
        {redditContentList.map(({ id }) => <a key={id} className="embedly-card" href={id}>Card</a>)}
      </div>
      <div className={s.verticalWrapper}>
        {renderTwitterContentList(twitterContentList.slice(twitterContentSplitIndex))}
      </div>
    </div>
  );
};

export default HotContent;
