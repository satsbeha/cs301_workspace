const prompt = require("prompt-sync")();

let Age = +prompt(" please Enter your Age ");
let season = prompt(" please Enter season ");
let BedTime = " "

if (Age <= 5) {
    if (season =="summer" || season == "fall") {
        BedTime = " 8:30 PM";

    }
    else {
        BedTime = " 8:00 PM";
    }
} else if (Age <= 12) {
    if (season == "summer") {
        BedTime = "9:30 PM";
    } else {
        BedTime = " 8:30 PM";
    }
} else {
    if (season == "summer") {
        BedTime = "10:30 PM";
    } else {
        BedTime = " 9:30 PM";
    }

}

console.log(BedTime);