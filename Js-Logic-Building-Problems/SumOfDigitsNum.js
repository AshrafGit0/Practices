function SumOfDigitNumbers(n) {
    if (n < 10) {
        throw new Error("Number should 2 or more than 2 digit numbers");
    }
    let NumberStr = n.toString();
    let res = 0;
    console.log(NumberStr.charAt(0));
    for (let i = 0; i < NumberStr.length; i++) {
        res = res + parseInt(NumberStr.charAt(i));
    }
    return res;
}
console.log(SumOfDigitNumbers(235));