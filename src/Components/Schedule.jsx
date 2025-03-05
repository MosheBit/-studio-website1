// import React from 'react';
import './Schedule.css'; // קובץ ה-CSS שאנחנו ניצור

const Schedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">לוח זמנים</h2>
      <div className="schedule-image-container">
        <img 
          src="/public/Schedule/Schedule.jpg" 
          alt="לוח זמנים" 
          className="schedule-image" 
        />
      </div>
    </div>
  );
};

export default Schedule;
