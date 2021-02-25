
const prompt = require("prompt-sync")();
let number_overdue = parseInt(prompt("please Enter number of overdue books last year"));
let status = prompt("plaese Enter your  status ");

if (status == "student") {
    if (number_overdue === 0) {

        console.log(6 + "weeks");
    } else if (number_overdue < 3) {
        console.log(4 + "weeks");

    } else {
        console.log(loan_duration = 2 + "weeks")
    }
}
else if (status == "faculty") {

    if (number_overdue === 0) {
        console.log(12 + "weeks");
    } else if (number_overdue < 3) {
        console.log(10 + "weeks");

    } else {
        console.log(8 + "weeks");
    }
}
else {
    if (number_overdue === 0) {
        console.log(4 + "weeks");

    } else if (number_overdue < 3) {
        console.log(3 + "weeks");
    } else {
        console.log(2 + "weeks");
    }

}
