const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const appRouter = require("./appRouter");

const app = express();
const port = 3000;
dbConnect()
app.use(appRouter);
app.listen(port);