// Code your solution in this file!
// returnFirstTwoDrivers()
// 1) should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function (arr) {
    // arr = ["Lewis", "Max", "Charles", "Lando", "Carlos", "Daniel", "Seb"]
    const firstTwo = arr.slice(0, 2);
    return firstTwo;
};
returnFirstTwoDrivers(["Lewis", "Max", "Charles", "Lando", "Carlos", "Daniel", "Seb"]);

// returnLastTwoDrivers()
// 1) should return an array of the last two drivers
const returnLastTwoDrivers = function (arr) {
    const lastTwo = arr.slice(-2);
    return lastTwo;
};
returnLastTwoDrivers(["Lewis", "Max", "Charles", "Lando", "Carlos", "Daniel", "Seb"]);

// selectingDrivers
// 1) has the `returnFirstTwoDrivers` function to as its first element
// 2) has the `returnLastTwoDrivers` function to as its last element
// 3) allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier()
// 1) returns a function
// 2) should multiply a given value using the created multiplier
function createFareMultiplier(integer) {
    return function (fare) {
        return fare * integer
    };
};
createFareMultiplier(4)(2);

// fareDoubler()
// 1) is a function
// 2) doubles fares
function fareDoubler(fare) {
    const doubleFare = createFareMultiplier(1)(fare) * 2;
    return doubleFare;
};
fareDoubler(10);

// fareTripler()
// 1) is a function
// 2) triples fares
function fareTripler(fare) {
    const tripleFare = createFareMultiplier(1)(fare) * 3;
    return tripleFare;
};
fareDoubler(10);

// selectDifferentDrivers(arrayOfDrivers, function)
// 1) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// 2) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers(array, selectingDrivers) {
    if (selectingDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array)
    } else if (selectingDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array)
    };
};
selectDifferentDrivers(["Lucy", "Ste", "Lennon"], returnFirstTwoDrivers);
selectDifferentDrivers(["Lucy", "Ste", "Lennon"], returnLastTwoDrivers);
