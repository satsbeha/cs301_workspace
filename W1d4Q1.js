let prompt = require('prompt-sync')();

/*
let n = +prompt("enter number");
let FactorCount = 0;
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        FactorCount++

    }
}
let IsPrime = FactorCount === 0;

console.log(IsPrime)

*/
let n = +prompt("enter number");
let IsPrime = true;
for (let i = 2; i < n; i++) {
    if (n % 2 == 0) {
        IsPrime = false;
        break;
    }
}
console.log(IsPrime)