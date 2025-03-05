import './About.css';

const AboutStudio = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">אודות הסטודיו</h2>

      {/* בלוק ראשון: על הסטודיו */}
      <div className="about-block">
        <div className="about-text">
          <h3 className="about-subtitle">על הסטודיו</h3>
          <p>סטודיו נוות ישראל נועד להציע חוויית כושר ברמה הגבוהה ביותר, תוך יצירת אווירה מקצועית ותומכת. אנו מספקים שירות איכותי עם תוכניות כושר מותאמות אישית לכל הגילאים ותחומי העניין.</p>
        </div>
        <div className="about-image">
          <img src="/public/constricted/1.webp" alt="סטודיו נוות ישראל" />
        </div>
      </div>

      {/* בלוק שני: המדריכות שלנו */}
      <div className="about-block reverse">
        <div className="about-text">
          <h3 className="about-subtitle">המדריכות שלנו</h3>
          <p>המדריכות שלנו הן מקצועיות עם שנים של ניסיון, והן עברו הכשרות מתקדמות. כל מדריכה מקפידה על גישה אישית כדי לעזור לך להשיג את היעדים שלך וללוות אותך בכל שלב במסע הכושר.</p>
        </div>
        <div className="about-image">
          <img src="/public/constricted/2.webp" alt="המדריכות שלנו" />
        </div>
      </div>

      {/* בלוק שלישי: שירותים ופעילויות */}
      <div className="about-block">
        <div className="about-text">
          <h3 className="about-subtitle">שירותים ופעילויות</h3>
          <p>הסטודיו שלנו מציע מגוון פעילויות כגון שיעורי סטודיו ייחודיים, כושר, פילאטיס, אימוני כוח וסיבולת ועוד. אנו מעדכנים את לוח הזמנים באופן קבוע כדי להציע את השיעורים העדכניים ביותר שמתאימים לצרכים של הלקוחות.</p>
        </div>
        <div className="about-image">
          <img src="/public/constricted/3.webp" alt="שירותים ופעילויות" />
        </div>
      </div>

      {/* בלוק רביעי: יתרונות ייחודיים */}
      <div className="about-block reverse">
        <div className="about-text">
          <h3 className="about-subtitle">יתרונות ייחודיים</h3>
          <p>לסטודיו נוות ישראל יתרונות רבים: מיקום נגיש, שעות גמישות שמתאימות לכל אחד, עמידה בתקני בריאות ובטיחות גבוהים, וסביבה תומכת. הסטודיו שלנו הוא מקום שבו כל מתאמן יכול למצוא את המסלול הנכון ולהיות חלק מקהילה מחויבת לבריאות ולהתקדמות.</p>
        </div>
        <div className="about-image">
          <img src="/public/constricted/4.webp" alt="יתרונות ייחודיים" />
        </div>
      </div>
    </div>
  );
};

export default AboutStudio;
