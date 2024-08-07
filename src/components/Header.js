import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, Search,  Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

const IconButton = ({ icon: Icon, onClick, notifications }) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.button
      className={`relative p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDarkMode 
          ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 focus:ring-offset-gray-800 focus:ring-gray-500' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-offset-white focus:ring-gray-400'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Icon size={20} />
      {notifications > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {notifications}
        </span>
      )}
    </motion.button>
  );
};

const Header = ({ data, onToggleSidebar, isSidebarExpanded, isMobile }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header 
      className={`flex justify-between items-center p-4 sticky top-0 z-30 ${
        isDarkMode ? 'bg-[#202028] text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="flex items-center flex-1">
        <div className="relative w-64 mr-4">
          <input
            type="text"
            placeholder="Search..."
            className={`w-full py-2 pl-10 pr-4 rounded-md focus:outline-none ${
              isDarkMode 
                ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500' 
                : 'bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-blue-300'
            }`}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
      <div className="flex items-center space-x-4 hidden lg:flex">
        <IconButton icon={Bell} notifications={data.notifications} />
        <IconButton icon={Settings} />
        <IconButton icon={isDarkMode ? Sun : Moon} onClick={toggleTheme} />
        <motion.div 
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={data.user.avatar} 
            alt={`${data.user.name}'s avatar`} 
            className="h-8 w-8 rounded-full object-cover"
          />
          {/* {!isMobile && (
            <>
              <span className="ml-2">{data.user.name}</span>
              <ChevronDown size={16} className="ml-1" />
            </>
          )} */}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;