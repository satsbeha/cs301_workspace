//Modify rotate functions to rotate array right by n times where, n is the second parameter 
//passed in the function.
function rotateNRight(arr, n) {
    let nRotated = arr;
    for (let i = 1; i <= n; i++) {
        nRotated = rotateRight(nRotated);
    }
    return nRotated;
}