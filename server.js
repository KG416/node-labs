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

// Random number function
app.get("/api/random", (req, res) => {
    const random = Math.floor(Math.random() * 1023);
    res.json({ number: random });
});

app.get("/api/custom_random/num", (req, res) => {
    const random = Math.floor(Math.random() * 1023);
    const customRandom = Math.floor(Math.random() * random);

    // Checking that random is never higher than customRandom
    console.log(`random = ${random}`);
    console.log(`customRandom = ${customRandom}`);

    res.json({ number: customRandom });
})

// Listening to our web server
app.listen(PORT, () => console.log(`server is listening to ${PORT}`));

