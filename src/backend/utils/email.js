const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: 'Neil Barry <hello@neil.com>',
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
    const test = await transporter.sendMail(mailOptions);
    console.log('test: ', test);
  } catch (err) {
    return err;
  }
};

module.exports = sendEmail;
