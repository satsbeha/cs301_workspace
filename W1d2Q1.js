const prompt = require("prompt-sync")();
 let quarts = +prompt(" please Enter volume in quarts");
 let liters = quarts * 0.946;
 console.log(liters);
 