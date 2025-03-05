import React from 'react';

import   { useState } from 'react';
import './BloodTypeDietCalculator.css'; // קובץ עיצוב

const BloodTypeDietCalculator = () => {
  const [bloodType, setBloodType] = useState('');
  const [allowedFoods, setAllowedFoods] = useState([]);

  const foods = {
    A: [
        'מזון מבוסס בעיקר על ירקות, קטניות, דגים, עוף, וטחונים.' ,
      '----------------',
        'ירקות ירוקים', 
      'פירות יער', 
      'דגים', 
      'עוף', 
      'תפוחי אדמה', 
      'קטניות', 
      'ריזים מלאים', 
      'תפוחים', 
      'אורז חום', 
      'שום', 
      'טופו', 
      'פסטה מקמח מלא', 
      'זיתים', 
      'סויה', 
      'חומוס', 
      'סלטים טריים', 
      'פירות טריים (כגון תפוזים וענבים)'
    ],
    B: [
        'דגש על חלב, בשר אדום, דגים, פירות, פירות יער, ותוספות של אגוזים וקטניות.',
      '----------------',
        'בשר אדום', 
      'דגים', 
      'ירקות', 
      'חלב', 
      'חמאה', 
      'פירות', 
      'פירות יער', 
      'מוצרי חלב פרוביוטיים', 
      'עוף', 
      'תפוחי אדמה', 
      'אורז', 
      'ריזים מלאים', 
      'פסטה מקמח מלא', 
      'אגוזים', 
      'חומוס', 
      'קישואים', 
      'גזר', 
      'כרובית'
    ],
    AB: [
        'השילוב בין סוגי הדם A ו-B, עם דגש על מזון מגוון כמו דגים, עוף, פירות וירקות.' ,
      '----------------',
      'דגים', 
      'פירות', 
      'חלב', 
      'עוף', 
      'ירקות ירוקים', 
      'בשר אדום במידה', 
      'אגוזים', 
      'פירות טריים', 
      'קטניות', 
      'קינואה', 
      'פסטה מקמח מלא', 
      'טופו', 
      'חומוס', 
      'פירות יער', 
      'סלטים טריים', 
      'שום', 
      'תפוחי אדמה', 
      'אורז חום'
    ],
    O: [
      'בעיקר בשר, דגים, ירקות, ופירות, עם יותר דגש על מוצרי טבע.',
      '----------------', 
      'בשר', 
      'עוף', 
      'דגים', 
      'פירות יער', 
      'ירקות ירוקים', 
      'פירות טריים', 
      'קטניות', 
      'עגבניות', 
      'ברוקולי', 
      'סויה', 
      'סלטים טריים', 
      'תפוחי אדמה', 
      'פסטה מקמח מלא', 
      'אורז חום', 
      'חומוס', 
      'תפוחים', 
      'אגוזים', 
      'שום', 
      'חלב דל שומן'
    ]
  };
  

  const handleBloodTypeChange = (event) => {
    const selectedBloodType = event.target.value;
    setBloodType(selectedBloodType);
    setAllowedFoods(foods[selectedBloodType] || []);
  };

  return (
    <div className="diet-calculator">
      <h2>מחשבון דיאטת סוג דם</h2>
      <div className="diet-input">
        <label htmlFor="blood-type">בחר סוג דם:</label>
        <select
          id="blood-type"
          value={bloodType}
          onChange={handleBloodTypeChange}
        >
          <option value="">בחר...</option>
          <option value="A">סוג דם A</option>
          <option value="B">סוג דם B</option>
          <option value="AB">סוג דם AB</option>
          <option value="O">סוג דם O</option>
        </select>
      </div>

      {bloodType && (
        <div className="diet-result">
          <h3>מזון מותר לפי סוג דם {bloodType}</h3>
          <ul>
            {allowedFoods.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BloodTypeDietCalculator;
