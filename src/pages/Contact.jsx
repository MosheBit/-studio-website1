import { useState } from 'react';
import ContactForm from '../Components/ContactForm'; // רכיב טופס יצירת קשר
import './Contact.css';


const Contact = () => {
    const [reloadData, setReloadData] = useState(false);
  
    const handleNewData = () => {
      setReloadData(!reloadData); // כל פעם שתלחץ שלח, נעדכן את הנתונים בטבלה
    }
  return (
    <div className="contact-page" >
      <h2>צור קשר</h2>
      <ContactForm onSubmit={handleNewData}  />
      <p>כתובת הסטודיו: רחוב XYZ, עיר ABC</p>
      <p>
        <a href="https://www.google.com/maps?q=XYZ">הגיעו אלינו ב-Google Maps</a>
      </p>
    </div>
  );
};

export default Contact;
