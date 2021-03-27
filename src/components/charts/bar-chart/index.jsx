/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import {
  Chart,
} from '@antv/g2';
import { colors } from '../const';

const data = [
  { sentiment: 'Negative', count: 70 },
  { sentiment: 'Neutral', count: 10 },
  { sentiment: 'Normal', count: 20 },
  { sentiment: 'Positive', count: 14 },
];

const BarChart = ({ className }) => {
  const ref = React.useRef(null);

  let chart = null;
  useEffect(() => {
    chart = new Chart({
      container: ref.current,
      height: 200,
      width: 500,
    });

    chart.data(data);
    chart.scale('count', {
      tickCount: 0,
    });
    chart.coordinate().transpose();
    chart.tooltip({
      showMarkers: false,
    });
    chart.interaction('active-region');
    chart.interval().position('sentiment*count').color('sentiment', `${colors.join('-')}`);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);
  return (
    <div className={className} ref={ref} />

  );
};

export default BarChart;
