// Method 1
function reverseStr(str) {
    let string = str.split('');
    let reverseStr = string.reverse().join('');
    console.log(reverseStr);
}
reverseStr("mehmood")
reverseStr("Ashraf");

// Method 2

function ReverseStr(str) {
    let ReverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        ReverseStr += str[i];
    }
    return ReverseStr;
}
console.log(ReverseStr("hello"))