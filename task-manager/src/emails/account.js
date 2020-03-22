const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'marcos-a-g@hotmail.com',
        subject: 'Sending with Twilio SendGrid is Fun ' + name,
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      });
}

module.exports = {
    sendWelcomeEmail
}