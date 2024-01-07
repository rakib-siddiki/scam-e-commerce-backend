const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const User = require("./models/userSchema.js");

const app = express();
dbConnect()
const port = 3000;
app.use(express.json());

app.listen(port, console.log("okey"));

app.post("/users", async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    telephone,
    password,
    city,
    address,
    postCode,
  } = await req.body;
  res.send(req.body);
  console.log(req.body);
  const user = new User({
    firstname,
    lastname,
    email,
    telephone,
    password,
    city,
    address,
    postCode,
  });
  console.log(user,'usessssss');
  user.save();
});
