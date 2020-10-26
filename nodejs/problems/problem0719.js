/**
 Project Euler: problem 719
 https://projecteuler.net/problem=719
 */

console.log("pippo");
console.log(T(10**4));
console.log(T(10**12));


function T(maxSquare){

    let sum = 0;
    for(let n=9; n ** 2 <= maxSquare; n++){
        let flag = isSplitEqualTo(n,n**2);
        //console.log(n,n**2,flag);
        if (flag){
            sum += n**2;
        }
    }
    return sum;
}

function isSplitEqualTo(sumOfDigits, digitsToSummarize){

    //console.log(sumOfDigits, digitsToSummarize);
    if(sumOfDigits === digitsToSummarize){
        //console.log(sumOfDigits, digitsToSummarize,"aa");
        return true;
    }
    if(sumOfDigits > digitsToSummarize){
        //console.log(sumOfDigits, digitsToSummarize,"bb");
        return false;
    }

    if(sumOfDigits < 0){
        //console.log(sumOfDigits, digitsToSummarize,"dd");
        return false;
    }

    // else
    const digitsMinus1 = Math.floor(Math.log10(digitsToSummarize));
    if (digitsMinus1 === 0){
        //console.log(sumOfDigits, digitsToSummarize,"cc");
        return false;
    }

    for (let lessSignificantDigit = digitsMinus1; lessSignificantDigit > 0; lessSignificantDigit--) {
        const mostSignificantDigits = Math.floor(digitsToSummarize / (10 ** lessSignificantDigit));
        const newDigitsToSummarize = digitsToSummarize - mostSignificantDigits * (10 ** lessSignificantDigit);
        const newSumOfDigits = sumOfDigits - mostSignificantDigits;
        if(isSplitEqualTo(newSumOfDigits, newDigitsToSummarize)){
            return true;
        }
    }
    return false;
}