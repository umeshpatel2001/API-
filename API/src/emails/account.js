
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SG_MAIL_API_KEY);

sgMail.send({
	to: "umeshpatelone56@gmail.com",
	from: "umeshpatelone56@gmail.com",
	subject: "This is System generated Email",
	text: "Hiiii from Node Js",
});
