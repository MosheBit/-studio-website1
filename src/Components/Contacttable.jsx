import { useState, useEffect } from 'react';
import { get, ref, set, remove } from "firebase/database";
import database from '../firebase/Config/firebaseConfig'; // לוודא שזו הדרך הנכונה לקובץ הקונפיגורציה שלך
import './Contacttable.css'; // קובץ עיצוב

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [editingId, setEditingId] = useState(null); // נשמור את ה-ID של הקשר שנמצא במצב עריכה
  const [editedContact, setEditedContact] = useState({}); // נשמור את הנתונים המעודכנים

  // פונקציה שמביאה את הנתונים מ-Firebase
  const fetchData = async () => {
    const dbRef = ref(database, 'contacts');
    
    // קריאה ל-Firebase לשלוף את הנתונים
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const contactList = Object.keys(data).map((key) => ({
        id: key,
        ...data[key]
      }));
      setContacts(contactList);
    } else {
      console.log("No data available");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // פונקציה למחוק קשר
  const handleDelete = async (id) => {
    const contactRef = ref(database, `contacts/${id}`);
    try {
      await remove(contactRef); // מוחק את הקשר ממסד הנתונים
      setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id)); // מסננים את הקשר מהרשימה המקומית
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  // פונקציה להתחיל עריכה}
  const handleEdit = (contact) => {
    setEditingId(contact.id); // הגדרת ה-ID של הקשר שמערכים
    setEditedContact({ ...contact }); // שמירה על המידע של הקשר לצורך העריכה
  };

  // פונקציה לעדכון קשר
  const handleUpdate = async (id) => {
    if (!editedContact.firstName || !editedContact.lastName || !editedContact.phone || !editedContact.email) {
      alert("אנא מלא את כל השדות");
      return;
    }

    const contactRef = ref(database, `contacts/${id}`);
    try {
      await set(contactRef, editedContact); // מעדכן את הקשר במסד הנתונים
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === id ? { ...contact, ...editedContact } : contact
        )
      ); // עדכון הרשימה המקומית
      setEditingId(null); // סגירת מצב העריכה
    } catch (error) {
      console.error("Error updating contact: ", error);
    }
  };

  // פונקציה לשינוי נתון בזמן עריכה
  const handleChange = (e, field) => {
    setEditedContact({
      ...editedContact,
      [field]: e.target.value
    });
  };
  return (
    <div className="table-container">
      <table className="contact-table">
        <thead>
          <tr>
            <th>שם פרטי</th>
            <th>שם משפחה</th>
            <th>טלפון</th>
            <th>אימייל</th>
            <th>הערות</th> {/* הוספת כותרת חדשה לעמודת ההערות */}
            <th>פעולות</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((row) => (
            <tr key={row.id}>
              <td>
                {editingId === row.id ? (
                  <input
                    type="text"
                    value={editedContact.firstName}
                    onChange={(e) => handleChange(e, 'firstName')}
                  />
                ) : (
                  row.firstName
                )}
              </td>
              <td>
                {editingId === row.id ? (
                  <input
                    type="text"
                    value={editedContact.lastName}
                    onChange={(e) => handleChange(e, 'lastName')}
                  />
                ) : (
                  row.lastName
                )}
              </td>
              <td>
                {editingId === row.id ? (
                  <input
                    type="text"
                    value={editedContact.phone}
                    onChange={(e) => handleChange(e, 'phone')}
                  />
                ) : (
                  row.phone
                )}
              </td>
              <td>
                {editingId === row.id ? (
                  <input
                    type="email"
                    value={editedContact.email}
                    onChange={(e) => handleChange(e, 'email')}
                  />
                ) : (
                  row.email
                )}
              </td>
              <td>
                {editingId === row.id ? (
                  <textarea
                    value={editedContact.notes}
                    onChange={(e) => handleChange(e, 'notes')}
                  />
                ) : (
                  row.notes
                )}
              </td>
              <td>
                {editingId === row.id ? (
                  <>
                    <button className="save-button" onClick={() => handleUpdate(row.id)}>שמור</button>
                    <button className="cancel-button" onClick={() => setEditingId(null)}>ביטול</button>
                  </>
                ) : (
                  <>
                    <button className="edit-button" onClick={() => handleEdit(row)}>עריכה</button>
                    <button className="delete-button" onClick={() => handleDelete(row.id)}>מחיקה</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
