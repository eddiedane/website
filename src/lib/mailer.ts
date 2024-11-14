import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export const transporter = createTransporter();

function createTransporter() {
  const options: SMTPTransport.Options = {};

  if (process.env.NODE_ENV === 'production') {
    options.service = 'gmail';
  } else {
    options.host = 'sandbox.smtp.mailtrap.io';
    options.port = 2525;
  }

  options.auth = {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  };

  return nodemailer.createTransport(options);
}
