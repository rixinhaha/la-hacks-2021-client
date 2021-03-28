/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import {
  Chart, registerShape, Util,
} from '@antv/g2';
import DataSet from '@antv/data-set';

function getTextAttrs(cfg) {
  return {
    ...cfg.defaultStyle,
    ...cfg.style,
    fontSize: cfg.data.size,
    text: cfg.data.text,
    textAlign: 'center',
    fontFamily: cfg.data.font,
    fill: cfg.color || cfg.defaultStyle.stroke,
    textBaseline: 'Alphabetic',
  };
}

// 给point注册一个词云的shape
registerShape('point', 'cloud', {
  draw(cfg, container) {
    const attrs = getTextAttrs(cfg);
    const textShape = container.addShape('text', {
      attrs: {
        ...attrs,
        x: cfg.x,
        y: cfg.y,
      },
    });
    if (cfg.data.rotate) {
      Util.rotate(textShape, cfg.data.rotate * Math.PI / 180);
    }
    return textShape;
  },
});

const WordCloud = ({ data }) => {
  console.log(data);
  const ref = React.useRef(null);

  let chart = null;
  useEffect(() => {
    const dv = new DataSet.View().source(data);
    const range = dv.range('count');
    const min = range[0];
    const max = range[1];
    dv.transform({
      type: 'tag-cloud',
      fields: ['word', 'count'],
      size: [600, 300],
      font: 'Verdana',
      padding: 0,
      timeInterval: 5000, // max execute time
      rotate() {
        // eslint-disable-next-line no-bitwise
        let random = ~~(Math.random() * 4) % 4;
        if (random === 2) {
          random = 0;
        }
        return random * 90; // 0, 90, 270
      },
      fontSize(d) {
        if (d.value) {
          return ((d.value - min) / (max - min)) * (75 - 50) + 20;
        }
        return 0;
      },
    });

    console.log(dv.rows);

    if (!chart) {
      chart = new Chart({
        container: ref.current,
        autoFit: false,
        width: 600,
        height: 300,
        padding: 0,
      });
      chart.data(dv.rows);
      chart.scale({
        x: { nice: false },
        y: { nice: false },
      });

      chart.legend(false);

      chart.axis(false);
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
      });
      chart.coordinate().reflect();
      chart.point()
        .position('x*y')
        .color('#738eda')
        .shape('cloud')
        .tooltip('count*word', (count, word) => ({
          name: word,
          value: `${count}`,
        }));
      chart.interaction('element-active');
      chart.render();
    }

    return () => {
      chart.destroy();
    };
  }, [data]);
  return (
    <div ref={ref} />

  );
};

export default WordCloud;
