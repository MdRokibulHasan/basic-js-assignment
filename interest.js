function interest(amount, rate, time) {
    myInterest = (amount * rate * time) / 100;
    return myInterest;
}

let calInterest = interest(3000, 12.5, 7);
console.log(calInterest);