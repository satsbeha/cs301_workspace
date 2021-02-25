const prompt = require("prompt-sync")();
let cost_house = prompt(" plaese Enter cost of house");
let Downpayment;
if (cost_house < 50000) {
    Downpayment = cost_house * .05;
} else if (cost_house < 100000) {
    Downpayment = 1000 + .1 * (cost_house - 50000);

} else if (cost_house < 200000) {
    Downpayment = 2000 + .15 * (cost_house - 100000);
} else {
    Downpayment = 5000 + .1 * (cost_house - 200000);
}
console.log(Downpayment);