
//count the digits of a given number

 function digits(x){
 
 if(x <10){
     return 1
 }
 
 else{
     return 1 + digits(x / 10)


 }
}
 console.log(digits(2345));