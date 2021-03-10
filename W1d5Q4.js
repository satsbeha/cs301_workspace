//Write a function to compute HCF of two numbers. Write it as a function expression

function HCF(x, y) {
    
    //x = Math.abs(x);
   // y = Math.abs(y);
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  console.log( HCF(20,48));