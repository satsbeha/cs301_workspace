

// This function takes three parameters, which are 
// three sides of a triangle and returns
// the computed area

function triangleArea(side1,side2,side3){
    let s= (side1+side2+side3)/2;
    let area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));

    return area;
}


// This function takes three parameters height, width and depth
// and returns computed volume for a rectangular prism.
function livingVolume(height,width,depth){
    return height*width*depth;   
}

// Function roofVolume, takes three parameters base, sweep and width 
// and with and returns volume
function roofVolume(depth, sweep, width){
    return triangleArea(depth, sweep, sweep)*width;
}

function houseVolume(height, width, depth, sweep){
    let totalVolume =livingVolume(height, width, depth)+roofVolume(depth, sweep, width);
    return totalVolume;
}

function io(){
    const prompt = require('prompt-sync')();
    let width = parseFloat(prompt("Please enter width: "));
    let height = parseFloat(prompt("Please enter height: "));
    let depth = parseFloat(prompt("Please enter depth: "));
    let sweep = parseFloat(prompt("Please enter sweep: "));

    let volume = houseVolume( height,width, depth, sweep);

    console.log(volume);

}
io();