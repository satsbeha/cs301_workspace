const prompt = require("prompt-sync")();

let totalBox = +prompt(" plaese Enter number of Box");
let  numberOfBoxInStack = +prompt( " plaese number of stacks");
let remainingBox = totalBox % numberOfBoxInStack;
let stackNeeded = Math.floor(totalBox/numberOfBoxInStack);
if(remainingBox>0){
    stackNeeded++;
}
console.log(stackNeeded);