const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.disable("x-powered-by");


const whitelist = process.env.WHITELISTED_DOMAINS.split(",")
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
app.use(cors(corsOptions))

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


// start express server on port 5000
app.listen(3000, () => {
  console.log("server started on port 3000");
});