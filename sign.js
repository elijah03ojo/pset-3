const readlineSync = require("readline-sync");

const integer = readlineSync.question("\nEnter a number: ");

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

if (integer >= MIN && integer < 0)
    console.log("Negative.");

if (integer <= MAX && integer > 0)
    console.log("Positive.");

if (integer == 0)
    console.log("Zero.");

if (integer <= MIN)
    console.log("Invalid.");
