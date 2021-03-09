//Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize",
//otherwise return false

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes("lottery") || lowerStr.includes("prize");
}

console.log(checkSpam('you are the winner of prize'));
console.log(checkSpam('lottery winner'));
console.log(checkSpam("solomon ybrah "));

// we first have to change the given dtring to lower case,or upper case
//and check for the the prsence of any string or lettr in it