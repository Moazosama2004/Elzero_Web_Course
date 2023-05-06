//////////////////
// Assignment 1 //
//////////////////


console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10_000); // 100000
console.log(100000.0); // 100000
console.log(50_000 + 50_000); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Number(parseInt("100000 moaz"))); // 100000
console.log(Number(parseInt("100000.09 moaz"))); // 100000
console.log(Number(parseFloat("100000 moaz"))); // 100000
console.log(Number(parseFloat("100000 moaz"))); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.ceil(99999.5)); // 100000
console.log(Math.floor(100000.5)); // 100000
console.log(Math.trunc(100000.5)); // 100000
console.log(Math.min(100000)); // 100000
console.log(Math.max(100000)); // 100000

//////////////////
// Assignment 2 //
//////////////////

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//////////////////
// Assignment 3 //
//////////////////

console.log(Number.MAX_SAFE_INTEGER % 9007199254740975); // 16

//////////////////
// Assignment 4 //
//////////////////

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseInt(myVar).toFixed())); // 100.57

//////////////////
// Assignment 5 //
//////////////////

let num = 10;

console.log(Number.isInteger(10) + true); // 2

//////////////////
// Assignment 6 //
//////////////////

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(Math.max(flt , flt ,flt))); // 10
console.log(Math.round(Math.min(flt , flt ,flt))); // 10
console.log(Math.trunc(flt)); // 10

//////////////////
// Assignment 7 //
//////////////////

console.log(Math.floor(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4