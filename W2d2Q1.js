//Write a function, isArrayEqual, that returns true if two arrays have === elements, else returns 
//false

function isequal(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]==arr2[i]){
            return true;
        }
        return false;
    }
    
}
let s1 =[1,3,5];
let s2 =[1,3,5];
console.log(isequal(s1,s2));