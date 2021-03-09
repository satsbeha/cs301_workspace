//Write the function getAverageAge(users) that gets an array of objects with two properties
// name and age and returns the average age.





let people = [
    {
      name: 'Anna',
      age: 22
    },
    {
      name: 'Tom',
      age: 34
    }, {
      name: 'John',
      age: 12
    },
  ]





function getAverage(arr ){
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length;
  }



  let ages = people.map(person => person.age);

console.log(getAverage(ages))