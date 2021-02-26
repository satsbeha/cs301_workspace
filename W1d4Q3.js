let prompt = require('prompt-sync')();


const PIN = 38;
let guess;
let count = 0;
do {
    guess = +prompt(" Insert pin number ");
    if (guess !== PIN) {

        console.log(" incorrect try again ")
        count++

    }else{
        console.log(" correct, welcome back")
    }

    

} while (count <= 3);

console.log(" sorry your account is locked");