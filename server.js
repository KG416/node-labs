// ======================== Imports ===========================

// Express, to be able to write simpler & cleaner node code
const express = require('express');
const app = express();

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

// I end with :num, that way I'll have access to whatever num is as req.params.num
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

// Listening to our web server
app.listen(PORT, () => console.log(`server is listening to ${PORT}`));
