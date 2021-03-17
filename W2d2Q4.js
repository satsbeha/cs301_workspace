// function to rotate the elements in an array to the left by 1.
function rotateLeft(arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = first;
    return arr;
}