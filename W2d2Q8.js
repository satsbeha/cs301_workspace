/*
Write a function that merges two sorted arrays into one single sorted array. Make use of shift 
and push array methods.
*/
function mergeSorted(first, second) {
    let merged = [];
    while (first.length > 0 && second.length > 0) {
        let smaller = first[0] < second[0] ? first : second;
        merged.push(smaller.shift());
    }

    if (first.length > 0) {
        merged.concat(first);
    } else if (second.length > 0) {
        merged.concat(second);
    }
    return merged;
}

console.log(mergeSorted([1,3,4,10,11],[1,3,4]))