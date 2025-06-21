import nodemailer from 'nodemailer';
import fs from 'fs';

export async function sendCertificateEmail(to, pdfPath) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use SMTP
    auth: {
      user: 'your.email@gmail.com',
      pass: 'your-email-password-or-app-password',
    },
  });

  const mailOptions = {
    from: '"Certificate Portal" <your.email@gmail.com>',
    to,
    subject: 'Your Certificate Application PDF',
    text: 'Please find attached your application PDF.',
    attachments: [
      {
        filename: pdfPath.split('/').pop(),
        path: pdfPath,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}
