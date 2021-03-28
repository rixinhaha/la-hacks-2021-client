/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import {
  Chart, registerShape,
} from '@antv/g2';
import { colors } from '../const';

// 自定义Shape 部分
registerShape('point', 'pointer', {
  draw(cfg, container) {
    const group = container.addGroup({});
    // 获取极坐标系下画布中心点
    const center = this.parsePoint({ x: 0, y: 0 });
    // 绘制指针
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: cfg.x,
        y2: cfg.y,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round',
      },
    });
    group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 9.75,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff',
      },
    });

    return group;
  },
});

const Sentimeter = ({ data }) => {
  const ref = React.useRef(null);

  let chart = null;
  useEffect(() => {
    if (!chart) {
      chart = new Chart({
        container: ref.current,
        width: 400,
        height: 300,
        padding: [0, 0, 50, 0],
      });
      chart.data(data);

      chart.coordinate('polar', {
        startAngle: (-9 / 8) * Math.PI,
        endAngle: (1 / 8) * Math.PI,
        radius: 0.75,
      });
      chart.scale('value', {
        min: 0,
        max: 9,
        ticks: [2, 4.5, 7],
      });

      chart.axis('1', false);
      chart.axis('value', {
        line: null,
        label: {
          offset: -30,
          formatter: (val) => {
            if (val === '2') {
              return 'Negative';
            } if (val === '4.5') {
              return 'Mixed';
            }
            return 'Positive';
          },
          style: {
            fontSize: 10,
            textAlign: 'center',
          },
        },
        tickLine: null,
        grid: null,
      });
      chart.legend(false);
      chart
        .point()
        .position('value*1')
        .shape('pointer')
        .color('#ddd');

      // 绘制仪表盘刻度线
      chart.annotation().line({
        start: [3.38, 0.905],
        end: [3.385, 0.85],
        style: {
          stroke: '#ddd', // 线的颜色
          lineDash: null, // 虚线的设置
          lineWidth: 3,
        },
      });

      chart.annotation().line({
        start: [5.62, 0.905],
        end: [5.62, 0.85],
        style: {
          stroke: '#ddd', // 线的颜色
          lineDash: null, // 虚线的设置
          lineWidth: 3,
        },
      });

      // 绘制仪表盘背景
      chart.annotation().arc({
        top: false,
        start: [0, 1],
        end: [9, 1],
        style: {
          stroke: '#dddd',
          lineWidth: 18,
          lineDash: null,
        },
      });

      // 绘制指标
      const val = data[0].value;
      const lineWidth = 18;

      if (val >= 3.38) {
        chart.annotation().arc({
          start: [0, 1],
          end: [3.38, 1],
          style: {
            stroke: colors[0],
            lineWidth,
            lineDash: null,
          },
        });
      }

      if (val >= 5.63) {
        chart.annotation().arc({
          start: [3, 1],
          end: [5.63, 1],
          style: {
            stroke: colors[1],
            lineWidth,
            lineDash: null,
          },
        });
      }

      if (val >= 5.63) {
        chart.annotation().arc({
          start: [5.63, 1],
          end: [val, 1],
          style: {
            stroke: colors[2],
            lineWidth,
            lineDash: null,
          },
        });
      }

      if (val <= 3.38) {
        chart.annotation().arc({
          start: [0, 1],
          end: [val, 1],
          style: {
            stroke: colors[0],
            lineWidth,
            lineDash: null,
          },
        });
      }

      if (val > 3.38 && val <= 5.63) {
        chart.annotation().arc({
          start: [3.38, 1],
          end: [val, 1],
          style: {
            stroke: colors[1],
            lineWidth,
            lineDash: null,
          },
        });
      }

      // 绘制指标数字
      chart.annotation().text({
        position: ['50%', '85%'],
        content: 'Score',
        style: {
          fontSize: 20,
          fill: '#545454',
          textAlign: 'center',
        },
      });
      chart.annotation().text({
        position: ['50%', '90%'],
        content: `${data[0].value * 10} %`,
        style: {
          fontSize: 21,
          fill: '#545454',
          textAlign: 'center',
        },
        offsetY: 15,
      });

      chart.render();
    }

    return () => {
      chart.destroy();
    };
  }, [data]);
  return (
    <div
      style={{
        height: 300,
      }}
      ref={ref}
    />

  );
};

export default Sentimeter;
