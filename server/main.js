const express = require("express");
const path = require("path");
const app = express();
const url = require('url');
const cors = require("cors");

require("dotenv").config();

app.disable("x-powered-by");


const envWhitelist = process.env.WHITELISTED_DOMAINS || "";
const whitelist = envWhitelist.split(",")
  .filter(domain => {
    try {
      new url.URL(domain);
      return true;
    } catch (_) {
      console.warn(`Invalid domain in whitelist: ${domain}`);
      return false;
    }
  });


const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(function(req, res, next) {
  res.header("X-Frame-Options", "SAMEORIGIN");
  res.header("Cache-Control", "no-store");
  next();
});

app.use(express.static(path.join(__dirname, "..", "build")),cors(corsOptions));
app.use(express.static("public"),cors(corsOptions),cors(corsOptions));


// start express server on port 5000
app.listen(3000, () => {
  console.log("server started on port 3000");
});