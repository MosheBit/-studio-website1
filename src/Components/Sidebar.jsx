// Sidebar.jsx
// import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item"><Link to="/admin">מנהל</Link></li>
        <li className="sidebar-item"><Link to="/employee">עובד</Link></li>
        <li className="sidebar-item"><Link to="/customer">אזור אישי ללקוח</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
