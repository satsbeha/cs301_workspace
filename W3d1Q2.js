//Write the function countProperties(obj) which returns number of properties of an object

function countProperties(obj){

    

    let count = 0;

   // iterate key using for loop

    for (let k in obj) {

        
      count++
        

    }

    

    return count;

}

car = { make : "Toyota", model : "Camry"}
 

console.log(countProperties(car));