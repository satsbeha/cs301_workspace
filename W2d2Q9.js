/*
Write a function that transforms a given array as following. Use appropriate array methods.
Input (Array) Output (String)
['Quick', 'Brown', 'Fox'] "Fox_Brown_Quick"
*/

function trnasform(arr){
    arr.reverse();
    let str= arr.join("_")
    return str;

}
 let sec =['Quick', 'Brown', 'Fox'] //"Fox_Brown_Quick"
 console.log(trnasform(sec));
