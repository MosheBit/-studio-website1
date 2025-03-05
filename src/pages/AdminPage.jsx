import { useState } from 'react';
import ContactTable from '../Components/Contacttable';
import ContactForm from '../Components/ContactForm';




const AdminPage = () => {
  const [reloadData, setReloadData] = useState(false);  // מבצע רינדור מחדש של הטבלה

  const handleNewData = () => {
    setReloadData(!reloadData); // כל פעם שתלחץ שלח, נעדכן את הנתונים בטבלה
  };
  return (
    <div className="admin-page">
      <h1>ברוך הבא, מנהל</h1>
      <p>כאן תוכל לנהל את המערכת</p>
      <ul>
        <li>ניהול משתמשים</li>
        <li>סטטיסטיקות</li>
        <li>הגדרות מערכת</li>
      </ul>

      <div>
      ContactForm
      <ContactForm onSubmit={handleNewData} />
      ContactForm

      ContactTable
      <ContactTable  />
      {/* key={reloadData} */}
      ContactTable 

      </div>

    </div>
  );
};

export default AdminPage;
