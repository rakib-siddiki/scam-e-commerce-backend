const connectTokenToDb = require("./tokenUtils/connectTokenToDb.js");
const emailTokenTemplate = require("./tokenUtils/emailTokenTemplate.js");
const sendMail = require("./sendMail.js");
const jwt = require("jsonwebtoken");
const User = require("../../models/userSchema.js");

const sendToken = async (email) => {
try {
      const token = jwt.sign({ email }, process.env.AUTH_JWT_SECRET, {
        expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
      });
      sendMail(email, emailTokenTemplate(token));
      connectTokenToDb(email, token);
} catch (error) {
    console.log("error", error);
}
};
module.exports = sendToken;
