import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

interface HalfPieChartProps {
  firstRatio: number;
  secondRatio: number;
}

const HalfPieChart = ({ firstRatio, secondRatio }: HalfPieChartProps) => {
  const data = {
    datasets: [
      {
        data: [firstRatio, secondRatio],
        backgroundColor: ['#fbde8c', '#5751be'],
        circumference: 180,
        rotation: -90,
        cutout: '65%',
      },
    ],
  };
  const options = {
    responsive: false,
    events: [],
  };

  return <Doughnut data={data} options={options} style={{ width: '294px' }} />;
};

export default HalfPieChart;
