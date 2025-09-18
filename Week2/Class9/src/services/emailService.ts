import nodemailer from 'nodemailer';
import "dotenv/config"

export async function sendSummaryEmail(fact: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Trivia numérica del día',
    html: `<h2>Trivia aleatoria</h2><p>${fact}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('📩 Correo enviado:', info.response);
  } catch (error) {
    console.error('❌ Error enviando correo:', error);
  }
}