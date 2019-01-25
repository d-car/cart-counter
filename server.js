const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models")

// Define Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve Static Assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cart-counter");
// MLAB Link Below
// mongoose.connect(process.env.MONGODB_URI || "mongodb://DanC:123456@ds143953.mlab.com:43953/onthedob_db");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});