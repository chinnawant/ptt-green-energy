const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config();



// add middlewares
app.use(cors({
  origin: process.env.WHITELIST,
}));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


// start express server on port 5000
app.listen(3000, () => {
  console.log("server started on port 3000");
});