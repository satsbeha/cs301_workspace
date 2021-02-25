const prompt = require("prompt-sync")();

let weather = prompt(" please Enter weather");
let footwear = " ";
if (weather === "hot") {
    footwear = "sandals";

} else if (weather === "rain") {
    footwear = "galoshes";

} else if (weather === " snow") {
    footwear = "boots";
}
console.log(footwear);