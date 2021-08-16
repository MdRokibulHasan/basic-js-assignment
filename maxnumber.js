// function number(first, secoand, tharid) {
//     if (first > secoand && first > tharid) {
//         return first;
//     }
//     else if (secoand > first && secoand > tharid) {
//         return secoand;
//     }
//     else (tharid > first && tharid > secoand)
//     return tharid;

// }

// let maxNumber = number(7, 8, 2);
// console.log(maxNumber);

// function number(first, secoand, tharid) {
//     if (first < secoand && first < tharid) {
//         return first;
//     }
//     else if (secoand < first && secoand < tharid) {
//         return secoand;
//     }
//     else (tharid < first && tharid < secoand)
//     return tharid;

// }

// let maxNumber = number(7, 8, 2);
// console.log(maxNumber);

// largest element of array 

// function largestElement(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element < largest) {
//             largest = element;
//         }
//     }

//     return largest;
// }
// const marks = [40, 50, 80, 30, 40];
// let maxNumber = largestElement(marks);
// console.log(maxNumber);

// fibonacci series 

// const fibo = [0, 1];
// for (let i = 2; i < 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

/* function fibonacci(n) {
    const fibo = [0, 1];
    for (let i = 2; i < 10; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

let fiboNumber = fibonacci(10);
console.log(fiboNumber); */

/* function fibonacci(num) {
    if (typeof num != 'number') {
        return "Please Enter Number";
    }
    if (num < 2) {
        return "Please enter positve number than 1";
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

let fiboNumber = fibonacci(-6);
console.log(fiboNumber); */

/* function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let fiboNumber = fibonacci(6);
console.log(fiboNumber); */


function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fibonacci(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

let fiboNumber = fibonacci(6);
console.log(fiboNumber);
