const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // מאפשר לקבל בקשות JSON

// הגדרת טרנספורטר עבור nodemailer לשליחת המיילים
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // המייל שלך
    pass: 'your-email-password', // הסיסמה שלך (או אפס סיסמה דרך Google)
  },
});

// הגדרת הממשק לשליחת המייל
app.post('/send-email', (req, res) => {
  const { firstName, lastName, phone, email, notes } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'd0548483562@gmail.com', // המייל שאליו יישלחו ההודעות
    subject: 'פניה חדשה בטופס יצירת קשר',
    text: `
      שם פרטי: ${firstName}
      שם משפחה: ${lastName}
      טלפון: ${phone}
      אימייל: ${email}
      הערות: ${notes}
    `,
  };

  // שליחת המייל
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('אירעה שגיאה בשליחת המייל');
    }
    res.status(200).send('ההודעה נשלחה בהצלחה');
  });
});

app.listen(port, () => {
  console.log(`השרת פועל על פורט ${port}`);
});
