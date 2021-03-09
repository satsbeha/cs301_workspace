//a. Create an empty object car
let car = {};
//Add the property name make with value Toyota
 car = { make : "Toyota"}
//Add the property name model with value Camry
 car = { make : "Toyota", model : "Camry"}
//Print the object

console.log(car);
//Without modifying the code structure of the object, change the value of the model to
//RAV4.

car.model= "RAV4"

//Print the object

console.log(car);


//Without modifying the code structure of the object, Remove property make from the
//object

delete car.make;


//Print the object

console.log(car);

