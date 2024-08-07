import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-700 p-2 rounded shadow-lg">
        <p className="text-gray-300 text-xs">Day: {label}</p>
        <p className="text-blue-500 font-bold text-sm">Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const ActivityChart = ({ data }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-3 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-sm font-bold mb-2 pl-2 text-left">{data.title}</h2>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <XAxis 
              dataKey="day" 
              stroke="#718096"
              tick={{ fill: '#718096', fontSize: 10 }}
            />
            <YAxis 
              stroke="#718096"
              tick={{ fill: '#718096', fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="#3B82F6"
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ActivityChart;