function gread(marks) {
    if (marks >= 40 && marks < 50) {
        return "You are c gread";
    }
    else if (marks >= 50 && marks < 60) {
        return 'You are c+ gread';
    }

    else if (marks >= 60 && marks < 70) {
        return 'You are B+ gread';
    }
    else if (marks >= 70 && marks < 80) {
        return 'You are A- gread';
    }
    else if (marks >= 80 && marks < 90) {
        return 'You are A gread';
    }
    else if (marks >= 90 && marks < 100) {
        return 'You are A+ gread';
    }
    else {
        return "you are Faile";
    }

}

let myNumber = gread(70);
console.log(myNumber);