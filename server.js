// Imports 
const { Router } = require('express');
const express = require('express');
const fs = require("fs");

// The variable app runs the express function
const app = express();

// Putting the localhost port in a variable
const PORT = 3000;

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

// counter ==============================================================
app.get("/api/counter", (req, res) => {

    // Check what data is inside the counter textfile
    fs.readFile('./db/counter.txt', (err, data) => {
        // Check for errors
        if (err) {
            console.log(err);
        }

        // Make content of counter.txt into a string
        let countNum = data.toString();

        // send back counters current state as the respons in a json object
        res.json({ counter: countNum });
    });
});
// ===============================================================================


// counter + 1 ==============================================================
app.get("/api/plus", (req, res) => {

    // Check what data is inside the counter text file (our current counter state)
    fs.readFile('./db/counter.txt', (err, data) => {

        // Check for errors
        if (err) {
            console.log(err);
        }

        // 1. Make content of counter.txt into a number and add 1
        // 2. Make it a string & put it in a new variable
        countNumPlus1Str = (Number(data) + 1).toString();
        console.log(`countNum is now ${countNumPlus1Str}`);

        // Update the state of counter by adding 1 to it
        fs.writeFile('./db/counter.txt', countNumPlus1Str, () => {
            // send back countNum as the respons in a json object
            res.json({ counter: countNumPlus1Str });

        });
    });
});
// ===============================================================================

// counter - 1 ==============================================================
app.get("/api/minus", (req, res) => {

    // Check what data is inside the counter text file (our current counter state)
    fs.readFile('./db/counter.txt', (err, data) => {

        // Check for errors
        if (err) {
            console.log(err);
        }

        // 1. Make content of counter.txt into a number and add 1
        // 2. Make it a string & put it in a new variable
        countNumMinus1Str = (Number(data) - 1).toString();
        console.log(`countNum is now ${countNumMinus1Str}`);

        // Update the state of counter by adding 1 to it
        fs.writeFile('./db/counter.txt', countNumMinus1Str, () => {
            // send back countNum as the respons in a json object
            res.json({ counter: countNumMinus1Str });

        });
    });
});
// ===============================================================================

// Listening to our web server
app.listen(PORT, () => console.log(`server is listening to ${PORT}`));
