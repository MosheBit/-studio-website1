// PopupIshi.jsx
import React from 'react';
import './PopupIshi.css'; // יצירת קובץ CSS נפרד לפופאפ
import { Link } from 'react-router-dom'; // ייבוא Link מ-React Router

const PopupIshi = ({ togglePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>אזור אישי</h2>
        <p>כאן יופיעו פרטי אזור אישי ללקוח.</p>
        
        {/* קישורים לניווט בין עמודים שונים */}
        <ul>
          <li><Link to="/admin">דף מנהל</Link></li>
          <li><Link to="/employee">דף עובד</Link></li>
          <li><Link to="/customer">דף לקוח</Link></li>
        </ul>

        <button onClick={togglePopup} className="close-popup">סגור</button>
      </div>
    </div>
  );
};

export default PopupIshi;
