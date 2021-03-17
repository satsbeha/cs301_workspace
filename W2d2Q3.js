//Write a function named getMiddle that returns the value of the middle element in an array. If 
//the array has an even number of elements, then this function must return the average of the 
//two middle elements.
function getMiddle(arr) {
    let half = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[half] + arr[half - 1]) / 2;
    } else {
        return arr[half];
    }
}