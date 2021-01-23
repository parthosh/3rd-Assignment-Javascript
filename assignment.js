
// 1st part - Convert into kilometer to meter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(5);

// Console Output
//console.log(result);


// 2nd part - calculating budget portion

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}

var result = budgetCalculator(1, 1, 1);

// Console Output
//console.log(result);


// 3rd part -  Calculating hotelcost on discount & staying

function hotelCost(dayCount) {
    var totalPrice = 0;
    if (dayCount <= 10) {
        totalPrice = dayCount * 100;
    } else if (dayCount <= 20) {
        var firstStayOffer = 10 * 100;
        var secondStay = dayCount - 10;
        var secondStayOffer = secondStay * 80;
        var totalPrice = firstStayOffer + secondStayOffer;
    } else {
        var firstStayOffer = 10 * 100;
        var secondStayOffer = 10 * 80;
        var thirdStay = dayCount - 20;
        var thirdStayOffer = thirdStay * 50;
        var totalPrice = firstStayOffer + secondStayOffer + thirdStayOffer;
    }
    return totalPrice;
}

var totalStayCost = hotelCost(71);

// Console Output
//console.log(totalStayCost);


// 4th part - Finding lengthy name from an array

function megaFriend(friendsName) {
    var lengthyName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (lengthyName.length < friendsName[i].length) {
            lengthyName = friendsName[i];
        }
    }
    return lengthyName;
}

var result = megaFriend(['Pronab Ghosh', 'Sharmin Sultana Mukti', 'Dipti Mandal', 'Bapon Hari', 'Jahirul Islam Jahid']);

// Console Output
//console.log(result);