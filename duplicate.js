/* const names = ['anik', 'anim', 'abul', 'kabul', 'anim', 'kawser', 'anik', 'subo', 'anik']
function duplicate(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const findDuplicate = duplicate(names);
console.log(findDuplicate); */


/* const names = [1, 55, 22, 11, 56, 55, 11, 50, 84, 21, 44, 85, 65, 56, 78, 65, 65, 55, 22, 58, 98, 78, 89, 98, 99, 85, 99, 588, 998, 55, 99, 85, 65]
function duplicate(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const findDuplicate = duplicate(names);
console.log(findDuplicate) */;


const letter = 'my name is anik';
function duplicate(text) {
    let revers = '';
    for (const reversLatter of text) {
        revers = reversLatter + revers;
    }
    return revers;
}
const findDuplicate = duplicate(letter);
console.log(findDuplicate);

