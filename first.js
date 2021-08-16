function feetNumber(inches) {
    var feet = inches / 12;
    return feet;
}
var feetToInches = feetNumber(156);
console.log("Feet :" + feet);

// function mileToKilomiter(miles) {
//     var km = miles * 1.60934;
//     return km;
// }
// var kilomiters = mileToKilomiter(26.2);
// console.log(kilomiters);

// Odd or even number function 

// const number = 4;
// console.log(4 % 2);

// function isEven(number) {
//     if (number % 2 ==0) {
//         return true;
//     }
//     return false;
// }
// const myNumber = 1641;
// const isMyNumber = isEven(myNumber);
// console.log(isMyNumber);
// odd number 
// function isEven(number) {
//     if (number % 2 != 0) {
//         return true;
//     }
//     return false;
// }
// const myNumber = 4;
// const isMyNumber = isEven(myNumber);
// console.log(isMyNumber);

// Year is leap Year 

// function isLeapYear(year) {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         return true;
//     }
//     return false;
// }
// const myYear = 20015;
// const isMyYera = isLeapYear(myYear);
// console.log(isMyYera);

// factorial value 

// var factorial = 1;
// for (var i = 1; i <= 7; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// function getFactorial(number) {
//     var factorial = 1;
//     for (var i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// var firstFactrial = getFactorial(7);
// console.log("First Factrial Number " + firstFactrial);