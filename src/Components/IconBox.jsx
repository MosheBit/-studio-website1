// import React from 'react';
import './IconBox.css';

const IconBox = () => {
  const features = [
    {
      icon: 'map-marker-alt',
      title: 'מיקום',
      description: 'הכתובת: שמואל הנביא 24, ירושלים. קרוב לתחנת רכבת שבטי ישראל וקווי אוטובוס: 3, 55.',
    },
    {
      icon: 'clock',
      title: 'שעות ערב',
      description: 'ראשון-חמישי: 7:00-23:00, שישי: בקיץ 7:00-14:00, מוצ"ש: בקיץ 21:30-23:30.',
    },
    {
      icon: 'cogs',
      title: 'ציוד מתקדם',
      description: 'הציוד מתוחזק ברמה גבוהה ומותאם לצרכי האימון לשיפור היכולות והנוחות.',
    },
    {
      icon: 'user-check',
      title: 'מקצועיות',
      description: 'מדריכות מוסמכות וניסיון, ליווי אישי לאורך האימון להשגת מטרות אישיות.',
    },
    {
      icon: 'bullseye',
      title: 'מטרות אישיות',
      description: 'מגוון תוכניות מותאמות כמו חיזוק הגוף, חיטוב, הורדת סוכר ועוד.',
    },
    {
      icon: 'tags',
      title: 'מחיר',
      description: 'כולל את כל שירותי המתקן ללא הגבלה, שיעורי סטודיו, ספינינג ועוד.',
    },
    {
      icon: 'heart',
      title: 'סביבה תומכת ונעימה',
      description: 'אווירה משפחתית עם דגש על קהילה לתמיכה במהלך האימון.',
    },
    {
      icon: 'dumbbell',
      title: 'מגוון פעילויות',
      description: 'שיעורים כמו פילטיס, זומבה, יוגה, ועוד, לשילוב סוגי אימון שונים.',
    },
    {
      icon: 'shield-alt',
      title: 'הקפדה על בטיחות ובריאות',
      description: 'ליווי צמוד של מדריכות מקצועיות לשמירה על בטיחות המתאמנות.',
    },
  ];

  return (
    <div className="icon-box">
      <h2>למה כדאי להגיע לסטודיו נוות ישראל?</h2>
      <div className="icon-list">
        {features.map((feature, index) => (
          <div className="icon-item" key={index}>
            <i className={`fas fa-${feature.icon}`}></i>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconBox;
