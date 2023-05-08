//////////////////
// Assignment 1 //
//////////////////

let start1 = 10;
let end1 = 100;
let exclude1 = 40;

for (let i = start1; i <= end1; i+=start1) {
    if (i === exclude1) {
        continue;
    } 
    console.log(i);
}

//////////////////
// Assignment 2 //
//////////////////

let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i >= end2; i--) {
    if (i < 10) {
        console.log(`0${i}`);
    }
    else {
        console.log(i);
    }
    if (i === 3) {
        break;
    }
}


//////////////////
// Assignment 3 //
//////////////////

let start3 = 1;
let end3 = 6;
let breaker3 = 2;


for (let i =  start3 ; i <= end3 ; i++) {
    console.log(i)
    for (let j = breaker3 ; j <= 4 ; j += breaker3 ) {
        console.log(`-- ${j}`);
    }
}


//////////////////
// Assignment 4 //
//////////////////

let index = 10;
let jump = 2;

for (let i = index ; i <= 10 ;i -= jump) {
    console.log(i);
    if (i == 4) {
        break
    }
}


//////////////////
// Assignment 5 //
//////////////////

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let len = letter.length

for (let i = 0 ; i < friends.length ; i++) {
    if (friends[i][0] === letter.toUpperCase())  {
        continue;
    }
    
    console.log(`${len++} => ${friends[i]}`)
}

//////////////////
// Assignment 6 //
//////////////////

let start6 = 0;
let swappedName = "elZerO";
let arrSwaped = []


for (let i = start6 ; i < swappedName.length ; i++) {
    swappedName[i] === swappedName[i].toLowerCase()
        ? (arrSwaped.push(swappedName[i].toUpperCase()))
        : (arrSwaped.push(swappedName[i].toLowerCase()));
}
console.log(arrSwaped.join(""));

//////////////////
// Assignment 7 //
//////////////////


let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start7 ; i <  mix.length ; i++) {
    if (typeof mix[i] === "number") {
        if(mix[i] === 1) {
            continue
        }
        console.log(mix[i]);
    }
    else {
        continue;
    }
}



