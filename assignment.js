// 1. calculate Seer TO Mon

function seerToMon(seer) {
    // When input nagitive number and String value than error massage
    if (seer >= 0 && typeof seer == 'number') {
        // calculate seer to mon
        let totalMon = (seer / 40);
        return totalMon;
    }
    // Error Massage return
    else {
        return 'Please Enter Valid Input';
    }

}

const finalMon = seerToMon(80);
console.log(finalMon);

// 2. calculate all sell product in shop 

function totalSales(shirtQuantity, pantsQuantity, shoesQuantity) {
    if (shirtQuantity >= 0 && typeof shirtQuantity == 'number' && pantsQuantity >= 0 && typeof pantsQuantity == 'number' && shoesQuantity >= 0 && typeof shoesQuantity == 'number') {
        const perShirtPrice = 100;
        const perPantsPrice = 200;
        const perShoesPrice = 500;

        // The total number of shirts sold per day

        let totalSalesShirt = (shirtQuantity * perShirtPrice);

        // The total number of Pants sold per day
        let totalSalesPants = (pantsQuantity * perPantsPrice);

        // The total number of Shoes sold per day
        let totalSalesShoes = (shoesQuantity * perShoesPrice);

        // The total number of products sold in a store per day

        let totalSalesProduct = (totalSalesShirt + totalSalesPants + totalSalesShoes);
        return totalSalesProduct;
    }
    else {
        return 'Please Enter Valid Input';
    }
}
const everydayTotalSales = totalSales(4, 5, 2);
console.log(everydayTotalSales);

// 3.Calculate the Delivery Cost of Product

function deliveryCost(quantityOfProduct) {
    const firstDeliveryCost = 100;
    const secondDeliveryCost = 80;
    const thirdDeliveryCost = 50;

    // This code will work when ordered Equal and below 100.
    if (quantityOfProduct <= 100 && quantityOfProduct >= 0 && typeof quantityOfProduct == 'number') {
        // Count First 100 Parcel Delivery Cost
        const countFirstDeliveryCost = (quantityOfProduct * firstDeliveryCost);
        return countFirstDeliveryCost;
    }
    // This code will work when ordered below 200.

    else if (quantityOfProduct <= 200 && quantityOfProduct >= 0 && typeof quantityOfProduct == 'number') {

        const countFirst100DeliveryCost = 100 * firstDeliveryCost;
        // Calculate how many parcels there are above one hundred
        const CountMoreDelivery = quantityOfProduct - 100;
        const countMoreDeliveryCost = (CountMoreDelivery * secondDeliveryCost);
        const totalSecond200DeliveryCost = (countFirst100DeliveryCost + countMoreDeliveryCost);
        return totalSecond200DeliveryCost;
    }
    // This code will only work when the order is above 200.
    else if (quantityOfProduct > 200 && quantityOfProduct >= 0 && typeof quantityOfProduct == 'number') {
        // Count First 100 Parcel Delivery Cost
        const countFirst100DeliveryCost = 100 * firstDeliveryCost;
        // Count Second 200 Parcel Delivery Cost
        const CountSecond200DeliveryCost = 100 * secondDeliveryCost;
        const CountMoreDelivery = quantityOfProduct - 200;
        const countMoreDeliveryCost = (CountMoreDelivery * thirdDeliveryCost);
        const totalThirdDeliveryCost = (countFirst100DeliveryCost + CountSecond200DeliveryCost + countMoreDeliveryCost);

        return totalThirdDeliveryCost;

    }
    else {
        return 'Please Enter Valid Input';
    }
}
const deliveryCostOfProduct = deliveryCost(211);
console.log(deliveryCostOfProduct);

// 4. Find out The 5 Character friend name 

function perfectFriend(names) {
    let friendName = names[0];
    for (let name of names) {
        const friend = name;
        if (friend.length == 5) {
            friendName = name;
            break;
        }

    }
    return friendName;
}
const friends = ["anik", "anim", "babul", "duha", "Sagor", "shakill", "Sakibe"]
let findFriendName = perfectFriend(friends);
console.log(findFriendName);

