const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json()); // אם אתה מקבל נתונים בפורמט JSON

app.post('/send-email', async (req, res) => {
  console.log("Received data:", req.body);  // לוג נתונים שמתקבלים בבקשה
  
  try {
    const { firstName, lastName, phone, email, notes } = req.body;

    // הגדרת transporter לשליחת מייל
    const transporter = nodemailer.createTransport({
      service: 'gmail', // השתמש בשירות שמתחבר אליו
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'destination-email@example.com', // היעד
      subject: 'Contact Form Submission',
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nEmail: ${email}\nNotes: ${notes}`,
    };

    // שליחה של המייל
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error("Error occurred while sending email:", error); // הדפסת שגיאה
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
