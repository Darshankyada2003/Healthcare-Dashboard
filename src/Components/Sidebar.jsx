import React from 'react';
import {
    LayoutDashboard,
    ArrowUpDown,
    Calendar,
    ClipboardList,
    ChartSpline,
    MessageCircleMore,
    Settings,
    Phone,
} from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <h2 className="sidebar-logo">
                Health<span>care.</span>
            </h2>
            <ul className="sidebar-links">
                <h4 className="sidebar-heading">General</h4>
                <li><LayoutDashboard size={18} /> Dashboard</li>
                <li><ArrowUpDown size={18} /> History</li>
                <li><Calendar size={18} /> Calendar</li>
                <li><ClipboardList size={18} /> Appointments</li>
                <li><ChartSpline size={18} /> Statistics</li>
            </ul>
            <ul className="sidebar-links">
                <h4 className="sidebar-heading">Tools</h4>
                <li><MessageCircleMore size={18} /> Chat</li>
                <li><Phone size={18} /> Support</li>
            </ul>
            <div className="sidebar-setting">
                <Settings size={18} /> Setting
            </div>
        </div>
    );
};

export default Sidebar;
