//calculate the power of any base

function power(x,n){

    if(n==1){
        return x;
    }
    else{
        return (x* power(x,n-1))
        
    }
    
}
console.log(power(2,4))