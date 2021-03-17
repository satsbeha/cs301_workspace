//function to rotate the elements in an array to the right by 1.
function rotateRight(arr) {
    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = last;
    return arr;
}