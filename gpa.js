const readlineSync = require("readline-sync");
const letter = String(readlineSync.question("\nEnter a letter grade: "));

if (letter == "F" || letter == "f")  {
 console.log("\nYour GPA 0.00.\n");
}

else if (letter == "A+" || letter == "a+")  {
 console.log("\nYour GPA is 4.00.\n");
}

else if (letter == "A" || letter == "a")  {
  console.log("\nYour GPA is 4.00.\n");
}

else if (letter == "A-" || letter == "a-") {
  console.log("\nYour GPA is 3.67.\n");
}

else if (letter == "B+" || letter == "b+")  {
 console.log("\nYour GPA is 3.33.\n");
}

else if (letter == "B-" || letter == "b-")  {
 console.log("\nYour GPA is 2.67.\n");
}

else if (letter == "B" || letter == "b") {
	console.log("\nYour GPA is 3.00")
}

else if (letter == "C" || letter == "c")  {
 console.log("\nYour GPA is 2.00.\n");
}

else if (letter == "C+" || letter == "c+")  {
 console.log("\nYour GPA is 2.33.\n");
}

else if (letter == "C-" || letter == "c-")  {
 console.log("\nYour GPA is 1.67.\n");
}

else if (letter == "D" || letter == "d")  {
 console.log("\nYour GPA is 1.00.\n");
}

else if (letter == "D+" || letter == "d+")  {
 console.log("\nYour GPA is 1.33.\n");
}

else if (letter == "D-" || letter == "d-")  {
 console.log("\nYour GPA is 0.67.\n");
}

else {
 console.log("\nInvalid.\n");
}
