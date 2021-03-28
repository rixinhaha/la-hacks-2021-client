/* eslint-disable no-param-reassign */
/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import {
  Chart,
} from '@antv/g2';

const PieChart = ({ data }) => {
  const ref = React.useRef(null);

  let chart = null;
  useEffect(() => {
    chart = new Chart({
      container: ref.current,
      autoFit: true,
      height: 350,
      width: 700,
    });

    chart.coordinate('theta', {
      radius: 0.75,
    });

    chart.data(data);

    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });

    chart
      .interval()
      .position('value')
      .color('name')
      .label('name*value', {
        layout: { type: 'pie-spider' },
        labelHeight: 20,
        content: (obj) => `${obj.name} (${obj.value}%)`,
        labelLine: {
          style: {
            lineWidth: 0.5,
          },
        },
      })
      .tooltip('name*value', (name, value) => ({
        name,
        value: `${value}%`,
      }))
      .adjust('stack');

    chart.legend(false);

    chart.interaction('element-active');

    chart.render();
    return () => {
      chart.destroy();
    };
  }, [data]);
  return (
    <div ref={ref} />

  );
};

export default PieChart;
