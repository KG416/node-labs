// Importing express 
const { Router } = require('express');
const express = require('express');

// The variable app runs the express function
const app = express();

// Putting the localhost port in a variable
const PORT = 5000;

// To be able to serve static files 
app.use(express.static('public'));

// Random number function =====================================
app.get("/api/random", (req, res) => {
    // Math
    const random = Math.floor(Math.random() * 1023);
    // send back random as the respons in a json object
    res.json({ number: random });
});
// =============================================================

// custom_random function ======================================
// I end with :num, that way I'll have access to whatever num is 
// as req.params.num
app.get("/api/custom_random/:num", (req, res) => {

    // Remove the : and put the number in a variable called num
    let num = req.params.num.substring(1);

    // Math
    const customRandom = Math.floor(Math.random() * num);

    console.log(`num = ${num}`);
    console.log(`customRandom = ${customRandom}`);

    // send back customRandom as the respons in a json object
    res.json({ number: customRandom });
})
// ====================================================================

// Listening to our web server
app.listen(PORT, () => console.log(`server is listening to ${PORT}`));
