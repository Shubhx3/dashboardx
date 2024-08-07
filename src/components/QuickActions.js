import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const QuickActionItem = ({ icon: Icon, label, onClick }) => {
  return (
    <motion.div
      className="flex items-center justify-between p-2 bg-gray-700 rounded-lg cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="p-1.5 bg-gray-600 rounded-full mr-2">
          <Icon size={14} className="text-blue-500" />
        </div>
        <span className="text-xs font-medium">{label}</span>
      </div>
      <Icons.ChevronRight size={14} className="text-gray-400" />
    </motion.div>
  );
};

const QuickActions = ({ data }) => {
  const actions = [
    { icon: Icons.Target, label: 'Goals', onClick: () => console.log('Goals clicked') },
    { icon: Icons.Coffee, label: 'Popular Dishes', onClick: () => console.log('Popular Dishes clicked') },
    { icon: Icons.BookOpen, label: 'Menus', onClick: () => console.log('Menus clicked') },
  ];

  return (
    <div className="bg-gray-800 p-3 rounded-lg h-full flex flex-col">
      <h2 className="text-sm font-semibold mb-2 text-left">Quick Actions</h2>
      <div className="flex-grow flex flex-col justify-around space-y-2">
        {actions.map((action, index) => (
          <QuickActionItem key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

export default QuickActions;