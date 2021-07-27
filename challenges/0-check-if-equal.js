/**
 * Given two numbers, returns a boolean representing whether or not the two numbers are equal.
 * @param {number} a 
 * @param {number} b 
 * @returns {boolean}
 */


function isEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
 }


console.log(isEqual(4, 4), "should be True");
console.log(isEqual(0, 0), "should be True");
console.log(isEqual(-4, -4), "should be True");
console.log(isEqual(4, -4), "should be False");
console.log(isEqual(0, 1), "should be False");