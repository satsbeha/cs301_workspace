const prompt = require("prompt-sync")();
let studentName = prompt(" plaese Enter your name");
let creditNumber = prompt(" plaese Enter number of credit complited at university");
if (creditNumber < 30) {
    console.log(studentName + " is freshman student");

} else if (creditNumber >= 30 && creditNumber < 60) {
    console.log(studentName + " is sophomer student");
} else if (creditNumber < 90) {
    console.log(studentName + " is junior student");
} else {
    console.log(studentName + " is senior student");
}