// import React from 'react';
import { FaRegCalendarAlt, FaTicketAlt, FaCreditCard, FaChild } from 'react-icons/fa'; // ייבוא אייקונים
import './StudioPrice.css'; // חשוב לכלול את הקובץ CSS

const StudioPrice = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">מחירון סטודיו</h2>

      <div className="pricing-cards">
        {/* כרטיס כניסה חד-פעמית */}
        <div className="pricing-card">
          <FaRegCalendarAlt className="pricing-icon" /> {/* אייקון של תאריך */}
          <h3 className="pricing-plan-title">עלות כניסה חד-פעמית</h3>
          <p className="pricing-price">
            <span className="old-price">₪59</span> ₪50
          </p>
          <ul className="pricing-details">
            <li>לשיעור חד-פעמי</li>
            <li>ללא התחייבות</li>
          </ul>
          <button className="pricing-btn">לרכישה עכשיו</button>
        </div>

        {/* כרטיס כרטיסיה */}
        <div className="pricing-card">
          <FaTicketAlt className="pricing-icon" /> {/* אייקון של כרטיס */}
          <h3 className="pricing-plan-title">כרטיסיה ל-10 כניסות</h3>
          <p className="pricing-price">
            <span className="old-price">₪450</span> ₪400
          </p>
          <ul className="pricing-details">
            <li>10 כניסות במחיר מוזל</li>
            <li>גמישות גבוהה</li>
          </ul>
          <button className="pricing-btn">לרכישה עכשיו</button>
        </div>

        {/* כרטיס מנוי חודשי */}
        <div className="pricing-card">
          <FaCreditCard className="pricing-icon" /> {/* אייקון של כרטיס אשראי */}
          <h3 className="pricing-plan-title">מנוי חודשי ללא הגבלה</h3>
          <p className="pricing-price">
            <span className="old-price">₪360</span> ₪320
          </p>
          <ul className="pricing-details">
            <li>גישה חופשית לכל השיעורים</li>
            <li>למשך חודש</li>
          </ul>
          <button className="pricing-btn">לרכישה עכשיו</button>
        </div>

        {/* כרטיס חוגים לילדות */}
        <div className="pricing-card">
          <FaChild className="pricing-icon" /> {/* אייקון של ילד */}
          <h3 className="pricing-plan-title">חוגים לילדות (עד 16 שיעורים)</h3>
          <p className="pricing-price">
            <span className="old-price">₪765</span> ₪720
          </p>
          <ul className="pricing-details">
            <li>שיעורים לילדות</li>
            <li>עד 5 תשלומים</li>
          </ul>
          <button className="pricing-btn">לרכישה עכשיו</button>
        </div>
      </div>
    </div>
  );
};

export default StudioPrice;
