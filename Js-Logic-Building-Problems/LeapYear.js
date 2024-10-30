function LeapYear(Year) {
    let leapYear = 2000 - Year;
    if (leapYear % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(LeapYear(2004))