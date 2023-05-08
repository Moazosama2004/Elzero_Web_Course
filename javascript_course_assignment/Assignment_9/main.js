//////////////////
// Assignment 1 //
//////////////////

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// //  Excute one of them only each one seperated ...

// // Method 1
// myFriends.pop()
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.reverse();
// myFriends.shift()
// myFriends.reverse();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// // Method 3 
// myFriends.length = num;
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//////////////////
// Assignment 2 //
//////////////////

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]

//////////////////
// Assignment 3 //
//////////////////

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

console.log(finalArr.concat(arrOne , arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

//////////////////
// Assignment 4 //
//////////////////

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];


console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

//////////////////
// Assignment 5 //
//////////////////

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];


// one
if (haystack.indexOf(needle) === +true) {
        console.log("Found");
}

if (haystack.lastIndexOf(needle) === +true) {
        console.log("Found");
}

// two

if(haystack.includes(needle)) {
    console.log("Found");
}

// three
if (haystack.indexOf(needle) === (Math.floor((haystack.length / 2 )))) {
        console.log("Found");
}


//////////////////
// Assignment 5 //
//////////////////

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

let element1 = arr1.pop();
let element2 = arr2.slice(arr1.length , arr2.length);

console.log(allArrs.concat(element1 , element2).sort().join("").toLowerCase()); // fxy
