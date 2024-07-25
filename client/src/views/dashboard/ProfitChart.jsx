import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// material-ui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

// apexcharts
import Chart from 'react-apexcharts';
import config from '../../config';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';

// Utility function to generate random colors
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Utility function to generate gradient colors for each data point
const generateGradientColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    colors.push(getRandomColor());
  }
  return colors;
};

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalProfitChart = ({ isLoading }) => {
  const theme = useTheme();
  const [totals, setTotals] = useState({ total_sales: 0, total_purchases: 0 });
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    axios
      .get(`${config.apiUrl}/totals`)
      .then((res) => {
        setTotals(res.data);
        setProfit(res.data.total_sales - res.data.total_purchases);
      })
      .catch((err) => {
        console.log('Total data is not fetched.');
      });
  }, []);

  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Total Profit',
        data: [0]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Profit'],
        data: [profit]
      },
      yaxis: {
        title: {
          text: 'Total Profit'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [0, 50, 100]
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `$${val.toFixed(2)}`;
          }
        }
      }
    }
  });

  useEffect(() => {
    if (profit !== 0) {
      setChartData((prevState) => ({
        ...prevState,
        series: [
          {
            name: 'Total Profit',
            data: [profit]
          }
        ]
      }));
    }
  }, [profit]);

  return (
    <div>
      {isLoading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <MainCard>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6">Total Sales: <CurrencyRupeeOutlinedIcon/>{totals.total_sales ? totals.total_sales : '0.00'}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Total Purchases:<CurrencyRupeeOutlinedIcon />{totals.total_purchases ? totals.total_purchases : '0.00'}</Typography>
            </Grid>
          </Grid>

          <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </MainCard>
      )}
    </div>
  );
};

TotalProfitChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalProfitChart;
