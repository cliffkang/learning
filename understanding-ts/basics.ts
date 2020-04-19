function addMultiple(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printingResult = true;
const resultPhrase = 'Result is: ';

addMultiple(number1, number2, printingResult, resultPhrase);
