const express = require("express");
const path = require("path");
const compression = require("compression")


// Setting port
const port = process.env.PORT || 5000;

// Start Express Instance
const app = express();

// COMPRESS ALL RESPONSES
app.use(compression())

// Check for SSL
app.enable("trust proxy")

// Body parsing middleware
app.use(express.json());


// Routing Config
require('./routes/routes')(app);

// Redirects user to https
app.use((req, res, next) => {
  if (req.secure) {
    // console.log("CONNECTION SECURE")
    next()
  } else {
    console.log("Connection not secure: REDIRECTING" + 'https://' + req.headers.host + req.url)
    res.redirect('https://' + req.headers.host + req.url)
  }
})

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') { // Set static folder
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


// Start Node server and listen on port
app.listen(port, () => console.log("Node Server started on port: " + port))

