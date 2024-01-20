const nodemailer = require("nodemailer");

const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

const sendMail = async (email,templte) => {
  try {
    const info = await transpoter.sendMail({
      from: "Scam E-commerce <" + process.env.AUTH_EMAIL + ">",
      to: email,
      subject: "Activate email",
      html: templte,
    });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = sendMail;
