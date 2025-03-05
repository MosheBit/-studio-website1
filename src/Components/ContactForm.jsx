import { useState } from 'react';
import PropTypes from 'prop-types';
import { ref, set } from 'firebase/database';
import database from '../firebase/Config/firebaseConfig'; // קובץ הקונפיגורציה של Firebase
import axios from 'axios'; // import axios לשליחה לשרת

import './ContactForm.css'; // קובץ עיצוב

const ContactForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState(''); // הוספת שדה הערות

  const handleSubmit = async (e) => {
    e.preventDefault();

    // שמירה ב-Firebase
    const newContactRef = ref(database, 'contacts/' + Date.now());
    await set(newContactRef, {
      firstName,
      lastName,
      phone,
      email,
      notes, // הוספת הערות לשמירה ב-Firebase
    });

    // קריאה לפונקציה onSubmit כדי לעדכן את המידע בטבלה
    onSubmit({
      firstName,
      lastName,
      phone,
      email,
      notes, // הוספת הערות לפונקציה
    });

    // שליחה לשרת לשליחת המייל
    try {
      await axios.post('http://localhost:5000/send-email', {
        firstName,
        lastName,
        phone,
        email,
        notes,
      });
      alert('ההודעה נשלחה בהצלחה!');
    } catch (error) {
      console.error('שגיאה בשליחה:', error);
      alert('אירעה שגיאה, נסה שנית.');
    }

    // ניקוי השדות אחרי שליחה
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setNotes(''); // ניקוי שדה הערות
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* הטופס נשאר כמו שהוא */}
      <div className="form-group">
        <label className="form-label">שם פרטי</label>
        <input
          type="text"
          placeholder="הזן את שמך"
          className="form-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">שם משפחה</label>
        <input
          type="text"
          placeholder="הזן את שם משפחה"
          className="form-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">מספר טלפון</label>
        <input
          type="number"
          placeholder="הזן את מספר הטלפון שלך"
          className="form-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">אימייל</label>
        <input
          type="email"
          placeholder="הזן את כתובת האימייל שלך"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* הוספת שדה הערות */}
      <div className="form-group">
        <label className="form-label">הערות</label>
        <textarea
          placeholder="הזן את ההערות שלך"
          className="form-input"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-button">שלח</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // וולידציה של פונקציה עבור onSubmit
};

export default ContactForm;
