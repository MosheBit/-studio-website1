// EmployeePage.jsx
// import React from 'react';
import ContactTable from '../Components/Contacttable';
const EmployeePage = () => {
  return (
    <div className="employee-page">
      <h1>ברוך הבא, עובד</h1>
      <p>כאן תוכל לראות את המשימות וההוראות שלך</p>
      <ul>
        <li>משימות יומיות</li>
        <li>סטטיסטיקות פעילות</li>
        <li>תמיכה</li>
      </ul>



      ContactTable
      <ContactTable />
      {/* key={reloadData} */}
      ContactTable
    </div>
  );
};

export default EmployeePage;
