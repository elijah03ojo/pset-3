const readlineSync = require("readline-sync");


const grade = readlineSync.question("\nEnter a grade: ");

if (grade >= 90 && grade <= 100)
    console.log("You received an A");

if (grade >= 80 && grade <= 89)
    console.log("You received a B");

if (grade >= 70 && grade <= 79)
    console.log("You received a C");

if (grade >= 60 && grade <= 69)
    console.log("You received a D");

if (grade >= 0 && grade <= 59)
    console.log("You received a F");
