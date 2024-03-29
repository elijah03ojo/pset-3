const readlineSync = require("readline-sync");

const integer = readlineSync.question("\nEnter an integer: ");

const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;

if (Number.isNaN(integer)) {
  console.log("\nInvalid.")
}
else if (integer%2 == 0) {
  console.log("\nEven.")
}
else {
  console.log("\nOdd.")
}
