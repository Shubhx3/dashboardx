import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

const Sidebar = React.memo(({ data, isExpanded, onToggle, isMobile }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.aside
      className={`fixed left-0 top-0 h-full transition-all duration-300 ease-in-out z-40
        ${isExpanded ? 'w-64' : 'w-16'}
        ${isDarkMode ? 'bg-[#202028] text-white' : 'bg-white text-gray-800'}`}
      initial={false}
      animate={{ width: isExpanded ? 256 : 64 }}
    >
      <div className="flex items-center justify-center h-16 px-4">
        <motion.img
          src={data.logo}
          alt="Logo"
          className={`h-8 ${isExpanded ? '' : 'w-8 object-contain'} cursor-pointer`}
          onClick={onToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
      <nav className="mt-5">
        {data.menuItems.map((item, index) => {
          const Icon = Icons[item.icon] || Icons.Menu;
          return (
            <React.Fragment key={item.id}>
              <motion.div
                className="relative group"
                whileHover={{ x: 5 }}
              >
                <a
                  href={item.path}
                  className={`flex items-center px-4 py-3 transition-colors duration-200 relative
                    ${item.active 
                      ? (isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800')
                      : (isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')
                    }`}
                  aria-current={item.active ? 'page' : undefined}
                >
                  {item.active && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"></div>
                  )}
                  <Icon 
                    size={20} 
                    className={`flex-shrink-0 ${item.active ? 'text-[#7294ff]' : 'text-gray-600'}`}
                    color={item.active ? '#7294ff' : undefined} 
                    aria-hidden="true" 
                  />
                  {isExpanded && (
                    <motion.span
                      className="ml-4 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </a>
                {!isExpanded && (
                  <div className="absolute left-full top-0 ml-2 px-2 py-1 bg-gray-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.label}
                  </div>
                )}
              </motion.div>
              {index < data.menuItems.length - 1 && (
                <div className={`mx-4 my-2 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} />
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </motion.aside>
  );
});

export default Sidebar;
