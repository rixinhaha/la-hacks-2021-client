import React, { useEffect } from 'react';
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';

const userData = [
  { country: 'Russia', value: 86.8 },
  { country: 'China', value: 106.3 },
  { country: 'Japan', value: 94.7 },
  { country: 'Mongolia', value: 98 },
  { country: 'Canada', value: 98.4 },
  { country: 'United Kingdom', value: 97.2 },
  { country: 'United States of America', value: 98.3 },
  { country: 'Brazil', value: 96.7 },
  { country: 'Argentina', value: 95.8 },
  { country: 'Algeria', value: 101.3 },
  { country: 'France', value: 94.8 },
  { country: 'Germany', value: 96.6 },
  { country: 'Ukraine', value: 86.3 },
  { country: 'Egypt', value: 102.1 },
  { country: 'South Africa', value: 101.3 },
  { country: 'India', value: 107.6 },
  { country: 'Australia', value: 99.9 },
  { country: 'Saudi Arabia', value: 130.1 },
  { country: 'Afghanistan', value: 106.5 },
  { country: 'Kazakhstan', value: 93.4 },
  { country: 'Indonesia', value: 101.4 },
];

const GeoMap = () => {
  const ref = React.useRef(null);

  let chart = null;
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/world.geo.json')
      .then((res) => res.json())
      .then((mapData) => {
        chart = new Chart({
          container: ref.current,
          height: 460,
          width: 600,
          padding: [55, 20],
        });
        chart.tooltip({
          showTitle: false,
          showMarkers: false,
          shared: true,
        });
        // 同步度量
        chart.scale({
          longitude: {
            sync: true,
          },
          latitude: {
            sync: true,
          },
        });
        chart.axis(false);
        chart.legend('trend', {
          position: 'left',
        });

        // 绘制世界地图背景

        const ds = new DataSet();
        const worldMap = ds.createView('back')
          .source(mapData, {
            type: 'GeoJSON',
          });
        const worldMapView = chart.createView();
        worldMapView.data(worldMap.rows);
        worldMapView.tooltip(false);
        worldMapView.polygon().position('longitude*latitude').style({
          fill: '#fff',
          stroke: '#ccc',
          lineWidth: 1,
        });

        // 可视化用户数据

        const userDv = ds.createView()
          .source(userData)
          .transform({
            geoDataView: worldMap,
            field: 'country',
            type: 'geo.region',
            as: ['longitude', 'latitude'],
          })
          .transform({
            type: 'map',
            callback: (obj) => {
              // eslint-disable-next-line no-param-reassign
              obj.trend = (obj.value > 100) ? 'positive' : 'negative';
              return obj;
            },
          });
        const userView = chart.createView();
        userView.data(userDv.rows);
        userView.scale({
          trend: {
            alias: 'sentiment',
          },
        });
        userView.polygon()
          .position('longitude*latitude')
          .color('trend', ['#F51D27', 'green'])
          .tooltip({
            fields: ['country', 'trend'],
          })
          .animate({
            leave: {
              animation: 'fade-out',
            },
          });
        userView.interaction('brush-filter');

        chart.render();
      });

    return () => {
      chart.destroy();
    };
  }, [userData]);

  return (
    <div ref={ref} />

  );
};

export default GeoMap;
