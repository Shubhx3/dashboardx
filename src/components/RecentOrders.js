import React from 'react';
import { motion } from 'framer-motion';

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-500 text-green-100';
      case 'pending':
        return 'bg-yellow-500 text-yellow-100';
      case 'cancelled':
        return 'bg-red-500 text-red-100';
      default:
        return 'bg-gray-500 text-gray-100';
    }
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

const RecentOrders = ({ data }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-3 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-sm font-bold mb-3 text-left pl-2">{data.title}</h2>
      <div className="flex-grow overflow-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {data.columns.map((column, index) => (
                <th
                  key={index}
                  className="px-3 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {data.data.map((order, index) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6">
                      <img className="h-6 w-6 rounded-full" src={`https://i.pravatar.cc/32?u=${order.customer}`} alt="" />
                    </div>
                    <div className="ml-2">
                      <div className="text-xs font-medium text-white">{order.customer}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="text-xs text-gray-300 text-left">{order.orderNo}</div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="text-xs text-gray-300 text-left">${order.amount.toFixed(2)}</div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-left">
                  <StatusBadge status={order.status} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default RecentOrders;