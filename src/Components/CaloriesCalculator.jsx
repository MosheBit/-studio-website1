import React from 'react';
import   { useState } from 'react';
import './CaloriesCalculator.css';

const CaloriesCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [gender, setGender] = useState('male');
  const [goal, setGoal] = useState('maintain');
  const [calories, setCalories] = useState(null);

  // חישוב BMR
  const calculateBMR = () => {
    if (gender === 'male') {
      return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  };

  // חישוב TDEE
  const calculateTDEE = () => {
    const bmr = calculateBMR();
    return bmr * activityLevel;
  };

  // חישוב קלוריות לפי היעד
  const calculateCalories = () => {
    let tdee = calculateTDEE();

    if (goal === 'lose') {
      tdee -= 500; // ירידה של 500 קלוריות ביום
    } else if (goal === 'gain') {
      tdee += 500; // עלייה של 500 קלוריות ביום
    }

    setCalories(tdee);
  };

  return (
    <div className="calories-calculator">
      <h1>מחשבון קלוריות יומי</h1>

      <div>
        <label>גיל</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>

      <div>
      <label>משקל  (ג&quot;ק)</label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <div>
      <label>גובה (ס&ldquo;מ)</label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>

      <div>
        <label>רמת פעילות גופנית</label>
        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="1.2">מעט או אין פעילות</option>
          <option value="1.375">פעילות קלה</option>
          <option value="1.55">פעילות בינונית</option>
          <option value="1.725">פעילות אינטנסיבית מאוד</option>
          <option value="1.9">פעילות אינטנסיבית + עבודה פיזית קשה</option>
        </select>
      </div>

      <div>
        <label>מין</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">גבר</option>
          <option value="female">אישה</option>
        </select>
      </div>

      <div>
        <label>יעד</label>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="maintain">לשמור על משקל</option>
          <option value="lose">לרדת במשקל</option>
          <option value="gain">להעלות משקל</option>
        </select>
      </div>

      <button onClick={calculateCalories}>חשב קלוריות</button>

      {calories && (
        <div className="result">
          <h2>הקלוריות היומיות שלך: {Math.round(calories)} קלוריות</h2>
        </div>
      )}
    </div>
  );
};

export default CaloriesCalculator;
