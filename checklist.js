/* 1.// declar three variable
var number=60;
var name='anik';
var isname=true; */

//2. variable (let,const)
/* let number = 5;
const name = 'anik';
let number = 6; */

// 3.simple math operation +,-,*,/,%
/* let num1 = 5;
let num2 = 10;
let sum1 = num1 + num2;
let sum2 = num1 - num2;
let sum3 = num1 * num2;
let sum4 = num1 / num2;
let sum5 = num1 % num2;

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);
 */
// 4.comparison(==,>,<,!=)
// two number is = 
/* let num1 = 5;
let num2 = 2;
if (num1 == num2) {
    console.log('tow number is same');
}
else {
    console.log('tow number is not same');
} */
/* // greather than number
let num1 = 5;
let num2 = 2;
if (num1 > num2) {
    console.log('number one is greather than number two');
}
else {
    console.log('number one is smaller than number two');
}

// smaller than number
let num1 = 5;
let num2 = 2;
if (num1 < num2) {
    console.log('number one is smaller than number two');
}
else {
    console.log('number one is greather than number two');
}
// not equal two number
let num1 = 5;
let num2 = 2;
if (num1 != num2) {
    console.log('number one is not equal than number two');
}
else {
    console.log('number one is equal than number two');
}
*/
// 5. two conditions case1:&&,case2:!=
/* let num1 = 6;
let num2 = 12;
if ((num1 > num2) && (num1 / num2)) {
    console.log('true');
}
else ((num1 > num2) != (num1 / num2))
console.log('flase'); */

// 6. if else conditions 
// 7.while loop 7 to 19 print 
/* var i = 7;
while (i <= 19) {
    // console.log(i)
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
} */
// 8. array element remove or update 

/* let markes = [50, 60, 80, 70, 90];
console.log(markes.length);
markes[4] = 65;
markes.push(45);
console.log(markes); */

/* let markes = [50, 60, 80, 70, 90];

let findIndex = markes.indexOf(170);
console.log(findIndex);
 */

// 9.for loop use yo display every element of array
/* let names = ['anik', 'anim', 'duha', 'shafie', 'arif', 'suha'];
for (const name of names) {
    console.log(name);
} */

// 10. an array to display only the number greather than 80 

/* let numbers = [70, 89, 65, 92, 55, 66, 82, 98, 56];


for (const number of numbers) {
    if (number > 80) {
        console.log(number);
    }
}
 */



// 11.three premater multiplication of function 

/* function multiple(num1, num2, num3) {
    let sum = (num1 * num2 * num3);
    return sum;
}
const total = multiple(5, 3, 2);
console.log(total); */

// 12. decleare an object and change any property 

var exam = {
    name: 'bangla',
    markes: 75,
    gender: "male",
    id: 1632
}
exam.gender = "felame";
console.log(exam.gender);