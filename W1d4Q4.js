let prompt = require('prompt-sync')();

// take input from the user
let number = +prompt('Enter a positive number: ');
let n1 = 0;
let n2 = 1;
let M;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

M = n1 + n2;

while (M <= number) {

    
    console.log(M);

    n1 = n2;
    n2 = M;
    M = n1 + n2;
}