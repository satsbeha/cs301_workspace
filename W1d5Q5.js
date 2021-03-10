
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




function lcm(a, b) {
    
    return a*b / HCF(a, b);
  }

  console.log(lcm(24,32))