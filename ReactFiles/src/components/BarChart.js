import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Monthly Sales Data'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    data: [10000, 12000, 9000, 15000, 18000, 20000, 22000, 25000, 21000, 19000, 18000, 16000]
  }]
};
const BarGraph = () => {
  return (
      <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default BarGraph;
