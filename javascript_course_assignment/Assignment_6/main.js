//////////////////
// Assignment 1 //
//////////////////

console.log(100 == "100"); // true
console.log(typeof 100 === typeof 1000); // true
console.log(110 - 100 < 10 + 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 !== typeof "-40"); // true
console.log(typeof 10 !== typeof"-40"); // true
console.log("10" == 10); // true
console.log(20 != false); // true
console.log( 10 == '10' );
console.log( 100 < 1000 );
console.log( 110 == ( 100 + 20 - 10 ) );
console.log( -10 === -10 );
console.log( -50 < +'-40' );
console.log( ( ( 10 * 4 ) === -'-40' ) );
console.log( +'10' === 10 );
console.log( typeof +20 === typeof +true );


//////////////////
// Assignment 2 //
//////////////////

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(typeof num2 === typeof num1); // true
console.log(num1 && true); // true
console.log(num2 && true); // true
console.log(num1 >= (num2 / num1)); // true
console.log(Boolean(num1));
console.log(Boolean(num2));
console.log(num1 >= (num2 - num1)); // true
console.log(num1 !== num2); // true
console.log(num1 != num2); // true
console.log(num2 >= num1); // true
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num1 != true); // true

//////////////////
// Assignment 3 //
//////////////////

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a > b || a > c); // true
console.log(!(a > b) && !(a > b) && (a > c) && !(a < c)); // true