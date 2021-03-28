import React, { useEffect } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import s from './index.module.css';

const HotContent = ({ redditContentList, twitterContentList }) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '//embed.redditmedia.com/widgets/platform.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const twitterContentSplitIndex = twitterContentList.length / 2;

  // eslint-disable-next-line max-len
  const renderTwitterContentList = (tweetIdList) => tweetIdList.map((id) => <TwitterTweetEmbed key={id} options={{ height: 4000 }} tweetId={id} />);

  return (
    <div className={s.wrapper}>
      <div className={s.verticalWrapper}>
        {renderTwitterContentList(twitterContentList.slice(0, twitterContentSplitIndex))}
      </div>
      <div className={s.verticalWrapper}>
        {redditContentList.map((url) => <a key={url} className="embedly-card" href={url}>Card</a>)}
      </div>
      <div className={s.verticalWrapper}>
        {renderTwitterContentList(twitterContentList.slice(twitterContentSplitIndex))}
      </div>
    </div>
  );
};

export default HotContent;
