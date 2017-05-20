// Below code about Each time we call the function, need to incremented value starting from 1-10 & displaying in console.
// Defining Function counter.  
 var counter = (function () {
    var n = 0; 
    return function () {
        n += 1; 
        return n;
    }
}());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
