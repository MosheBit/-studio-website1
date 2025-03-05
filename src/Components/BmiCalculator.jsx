import React from 'react';
import  { useState } from 'react';
import './BmiCalculator.css';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  // פונקציה לחישוב BMI
  const calculateBmi = () => {
    if (weight && height) {
      const bmiValue = (weight / Math.pow(height, 2)).toFixed(2);
      setBmi(bmiValue);

      // קביעת הקטגוריה לפי הערך של BMI
      if (bmiValue < 18.5) {
        setCategory('תת-משקל');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setCategory('משקל תקין');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setCategory('עודף משקל');
      } else {
        setCategory('השמנת יתר');
      }
    } else {
      alert("אנא מלא את כל השדות!");
    }
  };

  return (
    <div className="bmi-container">
      <h2>מחשבון BMI</h2>
      <div className="bmi-form">
      <div className="bmi-description">
            <h3>מה זה BMI?</h3>
            <p>
                מחשבון BMI (Body Mass Index) מחשב את היחס בין המשקל והגובה של אדם ומספק אינדיקציה על מצב הבריאות הגופנית שלו.
                תוצאת ה-BMI מאפשרת לדעת אם המשקל של אדם נמצא בטווח תקין, נמוך, עודף או השמנת יתר.
            </p>
        </div>

        <div className="input-group">
        <label>משקל (ק&gamma;ג)</label>
        <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="הכנס משקל"
          />
        </div>
        <div className="input-group">
        <label>גובה (מ&apos;)</label>
        <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="הכנס גובה"
            step="0.01"
          />
        </div>
        <button className="calculate-button" onClick={calculateBmi}>
          חישוב BMI
        </button>
      </div>

      {bmi && (
        <div className="result">
          <h3>ה-BMI שלך הוא: {bmi}</h3>
          <p>קטגוריה: {category}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
