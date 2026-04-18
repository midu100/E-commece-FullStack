"use client";
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export const OrdersPieChart = () => {
  const data = {
    labels: ['Delivered', 'Pending', 'Shipped', 'Cancelled'],
    datasets: [
      {
        label: 'Orders',
        data: [400, 300, 300, 200],
        backgroundColor: [
          '#10b981', // emerald-500
          '#f59e0b', // amber-500
          '#3b82f6', // blue-500
          '#ef4444', // red-500
        ],
        hoverOffset: 15,
        borderWidth: 0,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%', 
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)', 
        titleColor: '#cbd5e1', 
        bodyColor: '#60a5fa', 
        bodyFont: {
          size: 16,
          weight: 'bold'
        },
        padding: 12,
        borderColor: 'rgba(59, 130, 246, 0.3)',
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: true,
        boxPadding: 4,
        callbacks: {
          label: function(context) {
            return ` Qty: ${context.parsed}`;
          }
        }
      },
    },
    animation: {
      animateScale: true,
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1e293b] to-[#4338ca]/30 p-6 rounded-2xl shadow-xl shadow-indigo-900/10 border border-slate-700/50 flex flex-col h-[400px] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>

      <h3 className="text-lg font-bold text-white mb-4 tracking-wide relative z-10 drop-shadow">Orders by Status</h3>
      <div className="flex-1 w-full relative z-10 flex justify-center pb-8">
        <div className="w-full h-full relative p-4">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      <div className="absolute bottom-4 left-0 w-full flex flex-wrap justify-center gap-x-5 gap-y-2 relative z-10">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2 text-xs text-slate-300 font-bold uppercase tracking-wider">
            <span 
              className="w-3.5 h-3.5 rounded-md shadow-sm" 
              style={{ 
                backgroundColor: data.datasets[0].backgroundColor[index], 
                boxShadow: `0 0 10px ${data.datasets[0].backgroundColor[index]}40` 
              }}>
            </span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export const TopProductsBarChart = () => {
  const chartData = {
    labels: ['AirPods Pro', 'Nike Shoes', 'Apple Watch', 'Leather Bag', 'T-Shirt'],
    datasets: [
      {
        label: 'Sales Qty',
        data: [400, 300, 200, 278, 189],
        backgroundColor: '#2dd4bf', // teal-400 fallback
        hoverBackgroundColor: '#14b8a6', // teal-500
        borderRadius: {
          topLeft: 6,
          topRight: 6,
          bottomLeft: 0,
          bottomRight: 0,
        },
        barThickness: 40,
        borderSkipped: false,
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
        backgroundColor: 'rgba(15, 23, 42, 0.95)', 
        titleColor: '#cbd5e1', 
        bodyColor: '#2dd4bf', 
        bodyFont: {
          size: 16,
          weight: 'bold'
        },
        padding: 12,
        borderColor: 'rgba(45, 212, 191, 0.3)', 
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 12,
            weight: 'bold'
          },
          padding: 10,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: 'rgba(51, 65, 85, 0.5)', 
          borderDash: [5, 5],
          drawTicks: false,
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 12,
            weight: 'bold'
          },
          padding: 10,
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-[#1e293b] to-[#0f766e]/30 p-6 rounded-2xl shadow-xl shadow-teal-900/10 border border-slate-700/50 flex flex-col h-[400px] overflow-hidden relative">
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <h3 className="text-lg font-bold text-white mb-6 tracking-wide relative z-10 drop-shadow">Top Selling Products</h3>
      <div className="flex-1 w-full relative z-10 px-2">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};
