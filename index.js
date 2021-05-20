const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(int) {
    return function fareMultiplier() {
        return int * int;
    };
}

const fareDoubler = function createFareMultiplier(int) {
    return int * 2;
}

const fareTripler = function createFareMultiplier(int) {
    return int * 3;
}

const selectDifferentDrivers = function(drivers, functionType) {
    let result;
    if (functionType === returnFirstTwoDrivers) {
        result = returnFirstTwoDrivers(drivers)
    } else {
        result = returnLastTwoDrivers(drivers)
    }
    return result
};