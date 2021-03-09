//Write a function named titleCase with one parameter named s. This function returns a copy of s
//but with the first letter of each word capitaliz


function titleCase(s) {
    let temp = s.toLowerCase()
    temp = s.split(" ");
    for (let i = 0; i < temp.length; i++) {
        temp [i]= temp[i][0].toUpperCase()+temp[i].substring(1,temp[i].length)
    }   
    return temp;
}
let s1 = "catch me if you can";
console.log(titleCase(s1))