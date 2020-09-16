const nodemailer = require("nodemailer")
const config = require("config")

exports.sendMail = (req, res) => {
  console.log("Running Mail Controller")
  console.log(req.body)

  const customerContact = {
    name: req.body.name,
    contact: req.body.contact,
    message: req.body.message,
  }

  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'trizmocalifornia@yahoo.com',
      pass: config.get("emailPass")
    }

  });

  const mailOptions = {
    from: 'trizmocalifornia@yahoo.com',
    to: "tristan.e.perera@gmail.com",
    subject: 'Tristan Perera - Profile Contact',
    text: "\n NAME: " + customerContact.name + "\n CONTACT: " + customerContact.contact + "\n MESSAGE: " + customerContact.message
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      sendStatus(false)
    } else {
      console.log('Email sent: ' + info.response);
      sendStatus(true)
    }
  });

  const sendStatus = (status) => {
    console.log("sending status")
    if (status) {
      res.status(200).send("Email successfully sent!")
      console.log("status: ", status)
    } else {
      res.status(500).send("EMAIL FAILED")
      console.log("status: ", status)
    }
  }

}