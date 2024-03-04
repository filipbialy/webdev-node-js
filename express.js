const express = require('express');
const app = express();
const port = 3000;

// Route for the home page
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><p>Welcome to our website!</p>');
});

// Route for the about page
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This is all about us.</p>');
});

// Route for the contact page
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>Contact us here.</p>');
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
