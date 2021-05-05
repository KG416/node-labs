// Importing express 
const express = require('express');

// The variable app runs the express function, typ
const app = express();

// Putting the localhost port in a variable
const PORT = 5000;

// Importing path 
const path = require('path');

// To be able to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Listening to our web server
app.listen(PORT, () => console.log(`server is listening to ${PORT}`));

