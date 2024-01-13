const nodemailer = require("nodemailer");

const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

const sendMail = async (email)=>{
    try {
        const info = await transpoter.sendMail({
          from: "Scam E-commerce <" + process.env.AUTH_EMAIL + ">",
          to: email,
          subject: "Activate email",
          html: `<div style="text-align:center;font-family:josefin sans,sans-serif"><img alt=""src=https://i.ibb.co/0Z8jp6W/Vector-24-1.png><h1 style=font-size:36px;margin-bottom:10px>Welcome To Our Website</h1><p style=font-size:18px;margin-bottom:20px>Please Activate Your Account</p><a href=http://google.com style="background-color:#fb2e86;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:20px;border-radius:5px">Activate</a></div>`,
        });
    } catch (error) {
        console.log('error', error);
        process.exit(1)
    }
}

module.exports = sendMail