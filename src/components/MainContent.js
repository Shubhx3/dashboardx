import React, { lazy, Suspense, useEffect, useState, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTheme } from '../theme/ThemeContext';
import { debounce } from 'lodash';

const StatCards = lazy(() => import('./StatCards'));
const NetProfit = lazy(() => import('./NetProfit'));
const ActivityChart = lazy(() => import('./ActivityChart'));
const RecentOrders = lazy(() => import('./RecentOrders'));
const CustomerFeedback = lazy(() => import('./CustomerFeedback'));
const QuickActions = lazy(() => import('./QuickActions'));

const SkeletonLoader = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg p-4 h-full`}>
      <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-3/4 mb-2`}></div>
      <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-1/2`}></div>
    </div>
  );
};

const ErrorFallback = ({ error }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`text-red-500 p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg h-full`}>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

const LazyLoadedComponent = ({ component: Component, data, className }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<SkeletonLoader />}>
      <div className={`w-full h-full ${className}`}>
        <Component data={data} />
      </div>
    </Suspense>
  </ErrorBoundary>
);

const MainContent = ({ data }) => {
  const { isDarkMode } = useTheme();
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const debouncedResize = debounce(() => {
      setViewportHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    }, 100);
    debouncedResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const containerStyle = {
    minHeight: isMobile ? '100vh' : `calc(${viewportHeight}px - 6rem)`, // Use full height on mobile
    maxHeight: isMobile ? 'none' : `calc(${viewportHeight}px - 4rem)`,
    overflowY: isMobile ? 'auto' : 'hidden',
  };

  const sectionClass = "bg-transparent rounded-lg p-0 overflow-hidden";

  return (
    <main 
      className={`flex-1 p-4 ${
        isDarkMode ? 'bg-[#141416] text-white' : 'bg-gray-100 text-gray-800'
      } transition-all duration-300 ease-in-out`}
      style={containerStyle}
    >
      <h1 className="text-xl font-bold mb-3 text-left">Dashboard</h1>
      <div className={`flex flex-col space-y-6 ${isMobile ? '' : 'h-[calc(100%-2rem)]'}`}>
        {/* Top row */}
        <div className={`flex ${isMobile ? 'flex-col space-y-6' : 'space-x-6'} h-1/5`}>
          <div className={`${isMobile ? 'w-9/12' : 'w-3/5'}`}>
            <LazyLoadedComponent component={StatCards} data={data.statCards} className={`${sectionClass} px-0 h-full`} />
          </div>
          <div className={`${isMobile ? 'w-9/12' : 'w-2/5'}`}>
            <LazyLoadedComponent component={NetProfit} data={data.netProfit} className={`${sectionClass} h-full`} />
          </div>
        </div>

        {/* Middle row */}
        <div className={`flex ${isMobile ? 'flex-col space-y-6' : 'space-x-6'} h-2/5`}>
          <div className={`${isMobile ? 'w-9/12 h-[300px]' : 'w-3/5'}`}>
            <LazyLoadedComponent component={ActivityChart} data={data.activityChart} className={`${sectionClass} h-full`} />
          </div>
          <div className={`${isMobile ? 'w-9/12' : 'w-2/5'}`}>
            <LazyLoadedComponent component={QuickActions} data={data.quickActions} className={`${sectionClass} h-full`} />
          </div>
        </div>

        {/* Bottom row */}
        <div className={`flex ${isMobile ? 'flex-col space-y-6' : 'space-x-6'} h-2/5`}>
          <div className={`${isMobile ? 'w-9/12 h-[400px]' : 'w-3/5'}`}>
            <LazyLoadedComponent component={RecentOrders} data={data.recentOrders} className={`${sectionClass} overflow-auto h-full`} />
          </div>
          <div className={`${isMobile ? 'w-9/12 h-[400px]' : 'w-2/5'}`}>
            <LazyLoadedComponent component={CustomerFeedback} data={data.customerFeedback} className={`${sectionClass} overflow-auto h-full`} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;