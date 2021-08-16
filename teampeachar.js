// function celceasToFerhanhit(celceas) {
//     let ferhanhit = (celceas * 1.8) + 32;
//     return ferhanhit;
// }
// let myCelceas = celceasToFerhanhit(10);
// console.log(myCelceas);


function ferhanhitToCelceas(farh) {
    let celceas = (farh - 32) * 5 / 9;
    return celceas;
}
let myFerh = ferhanhitToCelceas(10);
console.log(myFerh);