/**
 * This file will have the logic to send emails
 */

const nodemailer = require("nodemailer");

/**
 * I need to setup the nodemailer for send the emails
 * smtp host details
 * credentials if needed
 */

module.exports = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "160220K070@gmail.com",
    pass: "htab afog xgep shyb",
  },
  secure: true,
});
