import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ThemeProvider, useTheme } from '../theme/ThemeContext';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import { DASHBOARD_DATA } from '../constants/dashboardData';

const DashboardContent = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useTheme();

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarExpanded(prev => !prev);
  }, []);

  const sidebarData = useMemo(() => DASHBOARD_DATA.sidebar, []);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-dark text-white' : 'bg-gray-100 text-gray-800'}`}>
      <Sidebar 
        data={sidebarData} 
        isExpanded={isSidebarExpanded} 
        onToggle={toggleSidebar}
        isMobile={isMobile}
      />
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'ml-64' : 'ml-16'}`}>
        <Header 
          data={DASHBOARD_DATA.header} 
          onToggleSidebar={toggleSidebar} 
          isSidebarExpanded={isSidebarExpanded}
          isMobile={isMobile}
        />
        <MainContent data={DASHBOARD_DATA} />
      </div>
      {isMobile && isSidebarExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

const Dashboard = () => (
  <ThemeProvider>
    <DashboardContent />
  </ThemeProvider>
);

export default Dashboard;