/* eslint-disable max-len */
// eslint-disable-next-line max-len
export const computeAggregate = (scoreA, scoreB, validCount) => {
  const score = (scoreA + scoreB) / validCount;
  return score;
};

export const getSentimeterScore = (redditBreakdown, twitterBreakdown) => {
  const validCount = redditBreakdown.valid_count + twitterBreakdown.valid_count;
  return Math.round(computeAggregate(redditBreakdown.total_score, twitterBreakdown.total_score, validCount));
};

export const getSentimentBreakDown = (redditBreakdown, twitterBreakdown) => {
  let validCount = 0;
  redditBreakdown.sort((a, b) => {
    if (a.name > b.name) { return 1; }
    return -1;
  });
  twitterBreakdown.sort((a, b) => {
    if (a.name > b.name) { return 1; }
    return -1;
  });

  redditBreakdown.forEach((obj) => {
    validCount += obj.value;
  });
  twitterBreakdown.forEach((obj) => {
    validCount += obj.value;
  });

  return redditBreakdown.map((obj, index) => ({
    name: obj.name,
    value: Math.round(computeAggregate(redditBreakdown[index].value, twitterBreakdown[index].value, validCount) * 100),
  }));
};

export const getEmotion = (redditBreakdown, twitterBreakdown) => {
  let validCount = 0;
  const redditEmotions = [...redditBreakdown.breakdown].sort((a, b) => {
    if (a.name > b.name) { return 1; }
    return -1;
  });
  const twitterEmotions = [...twitterBreakdown.breakdown].sort((a, b) => {
    if (a.name > b.name) { return 1; }
    return -1;
  });

  redditEmotions.forEach((obj) => {
    validCount += obj.value;
  });
  twitterEmotions.forEach((obj) => {
    validCount += obj.value;
  });

  return redditEmotions.map((obj, index) => ({
    name: obj.name,
    value: Math.round(computeAggregate(obj.value, twitterEmotions[index].value, validCount) * 100),
  }));
};
