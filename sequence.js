const readlineSync = require("readline-sync");

const num1 = Number(readlineSync.question("\nEmter three numbers:\n"));
const num2 = Number(readlineSync.question("\nEmter three numbers:\n"));
const num3 = Number(readlineSync.question("\nEmter three numbers:\n"));


const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

if (Number.isNaN(num1)) {
  console.log("\nInvalid.")
} else if (Number.isNaN(num2)) {
  console.log("\nInvalid.")
} else if (Number.isNaN(num3)) {
  console.log("\nInvalid.");
