import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const StatCard = ({ title, value, change, increase, icon }) => {
  const Icon = Icons[icon] || Icons.Hexagon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-lg p-2 flex flex-col justify-between pl-3"
    >
      <div className="flex items-center justify-between mb-1">
        <div className={`p-1 rounded-full ${increase ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
          <Icon size={14} className={increase ? 'text-green-500' : 'text-red-500'} />
        </div>
        <div className={`text-xs font-medium ${increase ? 'text-green-500' : 'text-red-500'}`}>
          {increase ? '▲' : '▼'} {Math.abs(change)}%
        </div>
      </div>
      <div className="text-xs text-gray-400 text-left">{title}</div>
      <div className="text-lg font-bold text-left">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      
    </motion.div>
  );
};

const StatCards = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 h-full">
      {data.map((item) => (
        <StatCard
          key={item.id}
          title={item.title}
          value={item.value}
          change={item.change}
          increase={item.increase}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default StatCards;