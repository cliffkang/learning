"use strict";
function addMultiple(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printingResult = true;
var resultPhrase = 'Result is: ';
addMultiple(number1, number2, printingResult, resultPhrase);
