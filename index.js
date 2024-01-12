const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const appRouter = require("./appRouter");

const app = express();
dbConnect()
app.use(appRouter);
const port = 3000;
app.use(express.json());
app.listen(port, console.log("okey"));


