// ======================== Imports ===========================

// Express, to be able to write simpler & cleaner node code
const express = require('express');
const app = express();

// File System, to be able to read and write files
const fs = require("fs");

// Putting the localhost port in a variable
const PORT = 3000;

// To be able to serve static files 
app.use(express.static('public'));
// =============================================================


// =========================== LAB 1 ===========================

// ================ Random number function =====================
app.get("/api/random", (req, res) => {
    // Math
    const random = Math.floor(Math.random() * 1023);
    // send back random as the respons in a json object
    res.json({ number: random });
});
// =============================================================

// =============== custom_random function ======================
// I end with :num to make num a "route parameter". That way I'll have 
// access to whatever num is as req.params.num
app.get("/api/custom_random/:num", (req, res) => {

    // Put the number in a variable called num
    let num = req.params.num;

    // Math
    const customRandom = Math.floor(Math.random() * num);

    console.log(`num = ${num}`);
    console.log(`customRandom = ${customRandom}`);

    // send back customRandom as the respons in a json object
    res.json({ number: customRandom });
})
// ====================================================================

// ================= Dice & Number function ===========================
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









// =========================== LAB 2 ====================================

// =========================== Counter ===========================
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


// =========================== Counter +1 ===========================
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

        // Update the state of counter
        fs.writeFile('./db/counter.txt', countNumPlus1Str, () => {
            // send back the updated counter state as respons in a json object
            res.json({ counter: countNumPlus1Str });
        });
    });
});
// ===============================================================================

// =========================== Counter -1 ===========================
app.get("/api/minus", (req, res) => {

    // Check what data is inside the counter text file (our current counter state)
    fs.readFile('./db/counter.txt', (err, data) => {

        // Check for errors
        if (err) {
            console.log(err);
        }

        // 1. Make content of counter.txt into a number and subtract 1
        // 2. Make it a string & put it in a new variable
        countNumMinus1Str = (Number(data) - 1).toString();
        console.log(`countNum is now ${countNumMinus1Str}`);

        // Update the state of counter
        fs.writeFile('./db/counter.txt', countNumMinus1Str, () => {
            // send back the updated counter state as respons in a json object
            res.json({ counter: countNumMinus1Str });

        });
    });
});
// ===============================================================================

// Listening to our web server
app.listen(PORT, () => console.log(`server is listening to ${PORT}`));
