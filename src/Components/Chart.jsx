import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Chart = ({ temperature, humidity, pressure }) => {
    return (
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Temperature (°C)', 'Humidity (%)', 'Pressure (hPa)'] }]}
        series={[
          { data: [temperature, humidity, pressure], color: '#3f51b5' },  
        ]}
        width={500}
        height={300}
      />
    );
  };
  
  export default Chart;
