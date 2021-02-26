let prompt = require('prompt-sync')()
let n= +prompt(" please enter a number to calculate its factorial")



    let answer = 1;

    for(let i= 1; i<=n;i++){
    if (n == 0 || n == 1){
       answer=1
    }else{
      
        answer = answer * i;
      }
    
  }
  
  console.log("The factorial of " + n + " is " + answer);