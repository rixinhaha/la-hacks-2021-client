/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import {
  Chart,
} from '@antv/g2';
import { colors } from '../const';

const BarChart = ({ data }) => {
  const ref = React.useRef(null);

  let chart = null;
  useEffect(() => {
    chart = new Chart({
      container: ref.current,
      height: 300,
      width: 500,
    });

    chart.data(data);
    chart.scale('value', {
      tickCount: 0,
    });
    chart.coordinate().transpose();
    chart.tooltip({
      showMarkers: false,
      showTitle: false,
    });
    chart.interaction('active-region');
    chart.interval().position('name*value').color('name', `${colors.join('-')}`);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);
  return (
    <div className={data} ref={ref} />

  );
};

export default BarChart;
