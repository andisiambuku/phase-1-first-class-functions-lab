// Code your solution in this file!
// const drivers = ["Antonia","Nuru","Amari","Mo"];

const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}

const returnLastTwoDrivers = array=>{
    return array.slice(array.length -2,array.length);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(rate){
    return (fare) =>rate*fare;
}
const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(arrayOfDrivers,selectingDrivers){
    return selectingDrivers(arrayOfDrivers);
}