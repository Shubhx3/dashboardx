import React from 'react';
import { motion } from 'framer-motion';

const CircularProgress = ({ percentage }) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-20 h-20"> {/* Slightly reduced size for better fit */}
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-700 stroke-current"
          strokeWidth="8"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        />
        <motion.circle
          className="text-blue-500 stroke-current"
          strokeWidth="8"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            strokeDasharray: circumference,
            transformOrigin: "50% 50%",
            transform: "rotate(-90deg)",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold">{percentage}%</span>
        <span className="text-xs text-gray-400">Complete</span>
      </div>
    </div>
  );
};

const NetProfit = ({ data }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-4 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-gray-400 text-sm font-medium text-left mb-2">Net Profit</h2>
      <div className="flex justify-between items-center flex-1"> {/* Changed to items-center and added flex-1 */}
        <div className="flex flex-col text-left">
          <motion.p 
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ${data.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </motion.p>
          <motion.span 
            className={`text-sm ${data.change >= 0 ? 'text-green-500' : 'text-red-500'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {data.change >= 0 ? '▲' : '▼'} {Math.abs(data.change)}%
          </motion.span>
          <motion.span
            className="text-xs text-gray-400 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Compared to last month
          </motion.span>
        </div>
        <CircularProgress percentage={data.percentage} />
      </div>
    </motion.div>
  );
};

export default NetProfit;