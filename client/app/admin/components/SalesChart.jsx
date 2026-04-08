"use client";
import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const SalesChart = () => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.6)'); // blue-500
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
      setGradient(gradient);
    }
  }, []);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        fill: true,
        label: 'Revenue ($)',
        data: [4000, 3000, 5000, 4500, 6000, 5500, 7000],
        borderColor: '#60a5fa', // blue-400
        backgroundColor: gradient || 'rgba(59, 130, 246, 0.2)',
        tension: 0.4, // Smoothes the line
        pointBackgroundColor: '#60a5fa',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#60a5fa',
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)', // slate-900 with opacity
        titleColor: '#cbd5e1', // slate-300
        bodyColor: '#60a5fa', // blue-400
        bodyFont: {
          size: 16,
          weight: 'bold'
        },
        padding: 12,
        borderColor: 'rgba(59, 130, 246, 0.3)',
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return '$' + context.parsed.y.toLocaleString();
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8', // slate-400
          font: {
            size: 12,
            weight: '600',
          },
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: 'rgba(51, 65, 85, 0.5)', // slate-700
          borderDash: [5, 5],
          drawTicks: false,
        },
        ticks: {
          color: '#94a3b8', // slate-400
          font: {
            size: 12,
            weight: '600',
          },
          callback: function(value) {
            return '$' + (value / 1000) + 'k';
          },
          padding: 10,
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  return (
    <div className="bg-gradient-to-br from-[#1e293b] to-[#1e3a8a] p-6 rounded-2xl shadow-xl shadow-blue-900/10 border border-slate-700/50 flex flex-col h-[400px] overflow-hidden relative">
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <h3 className="text-lg font-bold text-white mb-6 tracking-wide drop-shadow-md relative z-10">Revenue Overview</h3>
      <div className="flex-1 w-full relative z-10">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
