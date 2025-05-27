import React, { useState } from 'react';
import { Search, Bell, Plus, UserPen, Menu, X } from 'lucide-react';
import '../styles/Header.css';

const Header = ({ toggleSidebar }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <button className="menu-btn" onClick={toggleSidebar}>
          <Menu size={22} />
        </button>

        <div className={`header-search ${searchOpen ? 'active' : ''}`}>
          <Search
            size={18}
            className="search-icon"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onBlur={() => setSearchOpen(false)}
          />
          <div className="search-bell">
            <Bell size={18} />
          </div>
        </div>

        <div className="header-icons">
          <div className="icon-wrapper">👦</div>
          <div className="icon-plus">
            <Plus size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
