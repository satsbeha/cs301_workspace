let prompt =require ('prompt-sync')();

let testNUmber = +prompt("enter the number to test");
    function checkPrime(n) {  
        for (let i = 2; i<n;i++){
            if (n%i===0){
                return false;
            }
            }
            return true; 
        }


let isPrime = checkPrime(testNUmber); 


console.log(isPrime);