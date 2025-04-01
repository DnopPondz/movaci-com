import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 5000; // ใช้พอร์ต 3000 ตามเดิม

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  // ตรวจสอบว่าข้อมูลที่ส่งมาครบหรือไม่
  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
  }

  // ตั้งค่า SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_USER, 
    },
  });

  const mailOptions = {
    from: process.env.SENDING_EMAIL,
    to: process.env.RECIVE_EMAIL,
    subject: `Contact Form: ${subject}`,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
