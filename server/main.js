const express = require("express");
const path = require("path");
const app = express();
const url = require('url');
const mime = require('mime-types');
const cors = require("cors");

require("dotenv").config();

app.disable("x-powered-by");
let Error404Messsage = "Your custom error message here";


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
  res.header("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate"); // Updated Cache-Control header
  const extension = path.extname(req.url);
  const mimeType = mime.lookup(extension);
  if (mimeType) {
    res.header('Content-Type', mimeType);
  }
  next();
});

app.get("/static/js" ,(req, res, next) => {
  res.status(400).send(Error404Messsage);
});

app.get("/static/css" ,(req, res, next) => {
  res.status(400).send(Error404Messsage);
});

app.get("/static/media" ,(req, res, next) => {
  res.status(400).send(Error404Messsage);
});

app.use("/sitemap.xml" ,(req, res, next) => {
    res.status(400).send(Error404Messsage);
});

app.use(express.static(path.join(__dirname, "..", "build")),cors(corsOptions));
app.use(express.static("public"),cors(corsOptions),cors(corsOptions));

app.use(function customErrorHandler(err, req, res, next) {
   res.status(400).send(Error404Messsage);
});





// start express server on port 5000
app.listen(3000, () => {
  console.log("server started on port 3000");
});