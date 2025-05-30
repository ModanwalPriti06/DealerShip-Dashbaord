import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Chat() {
  const [vehicleData, setVehicleData] = useState([]);

   useEffect(() => {
          axios.get("http://localhost:5000/api/dealership/metrics")
              .then((res) => setVehicleData(res.data))
              .catch((err) => console.error(err));
      }, []);
  if (!vehicleData.length) return <div className="text-center p-4">Loading Chart...</div>;

  const months = vehicleData.map(item => item.Month);
  const newSales = vehicleData.map(item => item.NewVehicleSales);
  const usedSales = vehicleData.map(item => item.UsedVehicleSales);
  const inventory = vehicleData.map(item => item.NewVehicleInventory);
  const appointmentSetRate = vehicleData.map(item => item.AppointmentSetRate);
  const appointmentCloseRate = vehicleData.map(item => ({
    x: item.Month,
    y: item.AppointmentCloseRate,
  }));

  const chartData = {
    labels: months,
    datasets: [
      {
        type: 'bar',
        label: 'New Vehicle Sales',
        data: newSales,
        backgroundColor: '#3b82f6',
        stack: 'sales',
        yAxisID: 'y',
      },
      {
        type: 'bar',
        label: 'Used Vehicle Sales',
        data: usedSales,
        backgroundColor: '#f59e0b',
        stack: 'sales',
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: 'Appointment Set Rate (%)',
        data: appointmentSetRate,
        borderColor: '#10b981',
        backgroundColor: '#10b981',
        yAxisID: 'y2',
        tension: 0.4,
      },
      {
        type: 'line',
        label: 'New Vehicle Inventory',
        data: inventory,
        borderColor: '#8b5cf6',
        backgroundColor: '#8b5cf6',
        yAxisID: 'y1',
        borderDash: [5, 5],
      },
      {
        type: 'scatter',
        label: 'Appointment Close Rate (%)',
        data: appointmentCloseRate,
        backgroundColor: '#ef4444',
        yAxisID: 'y2',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: { position: 'top' },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        stacked: true,
        title: { display: true, text: 'Sales (New + Used)' },
      },
      y1: {
        type: 'linear',
        position: 'right',
        title: { display: true, text: 'Inventory (New)' },
        grid: { drawOnChartArea: false },
      },
      y2: {
        type: 'linear',
        position: 'right',
        offset: true,
        title: { display: true, text: 'Percentage (%)' },
        grid: { drawOnChartArea: false },
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Multi-Axis Sales and Inventory Trend</h2>
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
}

export default Chat;
