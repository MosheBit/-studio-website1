
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok, FaPhoneAlt } from 'react-icons/fa'; // אייקונים
import PopupIshi from './PopupIshi';  // ייבוא הקומפוננטה

function Navbar() {
  const [isPopupOpen, setPopupOpen] = useState(false); // State לניהול מצב הפופאפ

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen); // הופך את מצב הפופאפ
  };

  return (
    <header>
      <img src="/logo.png" alt="Studio Logo" />

      {/* פופאפ שייפתח בעת לחיצה על אזור אישי */}
      <button onClick={togglePopup} className="personal-area-button">אזור אישי</button>


    <nav>
        <ul>
          <li><Link to="/">דף הבית</Link></li>
          <li><Link to="/about">אודות</Link></li>
          <li><Link to="/Schedule">לוח זמנים</Link></li>
          <li><Link to="/pricing">מחירון</Link></li>
          <li><Link to="/appointment">קביעת תור</Link></li>
          <li><Link to="/gallery">גלריה</Link></li>
          <li><Link to="/contact">צור קשר</Link></li>
        </ul>






             {/* //רשימת איקונים */}
         <div className="social-icons">
             {/* אייקון טלפון */}
             <a href="tel:+972534638675" className="phone"><FaPhoneAlt size={30} /></a>
             {/* אייקון וואטסאפ */}
             <a href="https://wa.me/972534638675" target="_blank" rel="noopener noreferrer">
             <FaWhatsapp size={30} />
             </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
             {/* אייקון מייל */}
             <a href="mailto:d0548483562@gmail.com" target="_blank" rel="noopener noreferrer">
             <FaEnvelope size={30} />
             </a>
             <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer"><FaTiktok size={30} /></a>
         </div>
       
       </nav>






       {isPopupOpen && <PopupIshi togglePopup={togglePopup} />}
    </header>
  );
}

export default Navbar;











// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok, FaPhoneAlt } from 'react-icons/fa'; // הוספת אייקון טלפון


// function Navbar() {
//   return (
//     <header>
//       <img src="/logo.png" alt="Studio Logo"  />
      

//     </header>
//   );
// }

// export default Navbar;


