// Code your solution here
const findMatching = (drivers, lookUpVal) => {
    return drivers.filter((driver) => {
        return driver.toLowerCase() === lookUpVal.toLowerCase();
    })
}

const fuzzyMatch = (drivers, firstTwoLetter) => {
    return drivers.filter((driver)=>{
        return driver.toLowerCase().slice(0,2) === firstTwoLetter.toLowerCase();
    })
}

const matchName = (drivers, lookUpVal) => {
    return drivers.filter((driver) => {
        return driver.name === lookUpVal;
    })
}