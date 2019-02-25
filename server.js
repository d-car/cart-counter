const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
// const db = require("./models")

// Define Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve Static Assets
  app.use(express.static(path.join(__dirname, 'client')));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
  });
  


// Add routes, both API and view
app.use(routes);

// MongoDB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cart-counter", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});