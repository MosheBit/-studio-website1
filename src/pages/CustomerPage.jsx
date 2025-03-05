import React from "react";
import BmiCalculator from "../Components/BmiCalculator";
import BloodTypeDietCalculator from "../Components/BloodTypeDietCalculator";

import CaloriesCalculator from "../Components/CaloriesCalculator";
import AIDialog from "../Components/AIDialog";


const CustomerPage = () => {
  return (
    <div className="customer-page">
      <h1>אזור אישי ללקוח</h1>
      <p>כאן תוכל לראות את פרטי המשתמש שלך ולעדכן את המידע</p>
      <ul>
        <li>היסטוריית רכישות</li>
        <li>עדכון פרטי קשר</li>
        <li>שירות לקוחות</li>
      </ul>
      <div className="calculators-container">
        <div className="calculator-item">
          {/* <h1>BMI מחשבון</h1> */}
          <BmiCalculator />
        </div>

        <div className="calculator-item">
          {/* <h1>מחשבון דיאטת סוג דם</h1> */}
          <BloodTypeDietCalculator />
        </div>

        <div className="calculator-item">
          {/* <h1>מחשבון דיאטת סוג דם</h1> */}
          <CaloriesCalculator />
        </div>
        <div className="calculator-item">
          {/* <h1>מחשבון דיאטת סוג דם</h1> */}
          AIDialog
          <AIDialog />
          AIDialog
        </div>
      </div>
      
      


      
    </div>
  );
};

export default CustomerPage;
