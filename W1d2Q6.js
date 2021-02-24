/*
1. What will be the output of running following code?
console.log(Number(null));  // 0
console.log(Number(undefined));// NAN
console.log(Boolean("0"));// true
console.log(Boolean(" ")); // true

2. What will be the output of running following code?
let a = b = 2;
let c = 3 - (a + b + 1);
console.log(a--);// 2
console.log(++c); //-1
console.log(a);//1
console.log(c); //-1


3. What is the significance of + operator before prompt function in following code?

the data type we recived from user is always in the form of String even though user inserted a number.
 thus , + operator before prompt help us to convert it into number data type .


 4. What is the use of !! and ?? operators in JavaScript? Explain with an example of each.
 
 ?? is called Nullish coalescing  and returns the first argument if it’s not null/undefined. Otherwise, the second one.
 !  is known as NOT operator. It reverses the boolean result of the operand (or condition



 5. Which of the following statements is true?
a. In computer programming, a statement can be part of an expression.// false
b. In computer programming, an expression can be a part of a statement. // true

*/