const prompt = require("prompt-sync")();
let Age = prompt(" please Enter your Age ");
let MaxHearBeat = 220-Age;
let slowHeartBeat = .65* MaxHearBeat;
console.log(slowHeartBeat);

let fastHeartBeat =  .85* MaxHearBeat;
console.log(fastHeartBeat);
