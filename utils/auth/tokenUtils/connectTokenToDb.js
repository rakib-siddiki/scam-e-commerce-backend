const User = require("../../../models/userSchema");

const connectTokenToDb = async (email, token) => {
  try {
    const delay = 60 * 60 * 10000;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $set: { token } },
      { new: true }
    );
    if (existingUser.token) {
      setTimeout(async () => {
        await User.findOneAndUpdate(
          { token },
          { $unset: { token } },
          { new: true }
        );
      }, delay);
    }
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connectTokenToDb;
