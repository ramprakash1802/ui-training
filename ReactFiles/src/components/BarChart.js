import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarGraph = () => {
  const [categories, setCategory] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
  const [costVisible, setCostVisible] = useState(false);
  const [salesVisible, setSalesVisible] = useState(true);

  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Sales Data'
    },
    xAxis: {
      categories: categories,
      title: {
        text: 'Months'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Sales'
      }
    },  
    navigation: {
      buttonOptions: {
        align: 'right',
        verticalAlign: 'top',
        y: 0
      }
    },
    series: [{
      name: 'Sales',
      data: [10000, 12000, 9000, 15000, 18000, 20000, 22000, 25000, 21000, 19000, 18000, 16000],
      visible: salesVisible,
    }, {
      name: 'Cost',
      data: [1000, 1200, 9000, 1500, 1800, 2000, 2200, 2500, 2100, 1900, 1800, 1600],
      visible: costVisible
    }],
    plotOptions: {
      series: {
        events: {
          legendItemClick: function (e) {
            const target = e.target.userOptions.name;
            if(target === 'Cost') {
              setCategory(['Dec', 'Nov', 'Jan']);
              setCostVisible(true);
              setSalesVisible(false);
            } else {
              setCategory(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
              setCostVisible(false);
              setSalesVisible(true);
            }
          }
        }
      }
    }
  };
  return (
      <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default BarGraph;
