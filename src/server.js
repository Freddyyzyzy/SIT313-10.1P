const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
require("dotenv").config();

const port = process.env.PORT || 3000; 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const mg = mailgun({
  apiKey: '275babe45c9b3a8a4c9b3659d715e21c-afce6020-6791f9a7',
  domain: 'sandbox5197282ac9ca40f1b9cbe863670b9d35.mailgun.org',
});


const sendWelcomeEmail = (toEmail) => {
  const data = {
    from: 'zhiyi9043@gmail.com',
    to: toEmail,
    subject: 'Welcome to DEV@Deakin!',
    html: `
      <html>
      <body>
        <h1>Welcome!</h1>
        <p>Thank you for subscribing to DEV@Deakin.</p>
        <p>We’re glad to have you with us.</p>
      </body>
      </html>
    `,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error('Failed to send email:', error);
    } else {
      console.log('Email sent:', body);
    }
  });
};


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  
  if (email) {
    sendWelcomeEmail(email);
    res.status(200).send('Welcome email sent.');
  } else {
    res.status(400).send('Email is required.');
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});