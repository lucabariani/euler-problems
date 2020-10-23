/**
 Project Euler: problem 719
 https://projecteuler.net/problem=719
 */

console.log("pippo");
T(1000);


function T(maxSquare){

    for(let n=9; Math.pow(n,2) < maxSquare; n++){
        console.log(Math.pow(n,2));
    }
}

function isSquareSnumber(n){
    let square = Math.pow(n,2);
    return false;
}

function isSplitEqualTo(nSum, subN){

    if(nSum === subN){
        return true;
    }
    if(nSum > subN){
        return false;
    }
    // else
    let tmp = subN.toString();
    let first = str.substring(0, 1);
}