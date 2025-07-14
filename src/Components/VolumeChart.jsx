import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const VolumeChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available for this muscle group.</p>;

  const labels = data.map((_, index) => `Week ${index + 1}`);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Workout Volume',
        data,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: {
        display: true,
        text: 'Weekly Workout Volume',
        font: { size: 18 }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Week',
          font: { size: 14 }
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Volume',
          font: { size: 14 }
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default VolumeChart;
