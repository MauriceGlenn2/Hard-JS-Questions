/**
 * Sort by lowest to highest
 * 
 * sortLowToHigh([20, 40, 10, 30, 50, 10]) -> 10, 10, 20, 30, 40, 50
 */


function sortLowToHigh (arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
