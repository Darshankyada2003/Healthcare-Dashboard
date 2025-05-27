import React, { useState } from 'react';
import '../styles/Home.css';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Dashboard from './Dashboard';

const Home = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="app-container">
      <Sidebar isOpen={sidebarOpen} />

      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <div className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
        <Header isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="dashboard-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
