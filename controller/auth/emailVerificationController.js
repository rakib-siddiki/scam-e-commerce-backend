const User = require("../../models/userSchema");
const emailVerificationController = async (req, res) => {
  try {
    const { token } = await req.query;
    if (!token)
      return res.status(400).send({ message: "couldn't find the token" });
    const existingUser = await User.find({ token });
    console.log(
      "🚀 > emailVerificationController > existingUser:",
      existingUser
    );
    if (existingUser.length > 0) {
      if (existingUser[0].token == token) {
        await User.findOneAndUpdate(
          { token },
          { $set: { verify: true }, $unset: { token: "" } },
          { new: true }
        );
        res.status(200).send({ message: "Email verified" });
      }
    } else {
      res.status(400).send({ message: "Invalid token" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = emailVerificationController;
