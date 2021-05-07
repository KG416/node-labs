// Imports 
const { Router } = require('express');
const express = require('express');
const fs = require("fs");

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

// End ponint nr 3 ====================================================
app.get("/api/dice_num/:num", (req, res) => {
    // Roll dice function
    const rollDice = () => {
        return 1 + Math.floor(Math.random() * 6)
    }
    // Putting things in neat variables
    const dice = Number(rollDice());
    const num = Number(req.params.num);

    // Responding results in a json object
    res.json({
        dice: `You rolled ${dice}`,
        number: `Your number is ${num}`,
        total: `Dice + Number is ${num + dice}`
    });
});
// ====================================================================









// LAB 2 ====================================================================
var stateNumber;

app.get("/api/db", (req, res) => {

    // Check what data is inside the db textfile
    fs.readFile('./db/db.txt', (err, data) => {
        // Check for err and log if there is one
        if (err) {
            console.log(err);
        }
        stateNumber = Number(data);
        console.log(stateNumber);
    });
});

app.get("/api/plus", (req, res) => {

    // Check what data is inside the db textfile
    fs.readFile('./db/db.txt', (err, data) => {
        // Check for err and log if there is one
        if (err) {
            console.log(err);
        }
        stateNumber = Number(data);
        console.log(stateNumber);

        // Add 1 to stateNumber (didn't work with writeFile..)
    });

});

// Listening to our web server
app.listen(PORT, () => console.log(`server is listening to ${PORT}`));
