//////////////////
// Assignment 1 //
//////////////////

function sayHello(theName, theGender) {
    if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`);
    } else {
        console.log(`Hello ${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Moaz", "Male"); // "Hello Mr Moaz"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//////////////////
// Assignment 2 //
//////////////////

function calculate(firstNum, secondNum, operation = "add" ) {
    if (secondNum === undefined)  {
        console.log("Second Number Not Found");
    }
    else {
        switch (operation) {
            case "add" :
                console.log(firstNum + secondNum);
                break;
            case "subtract" :
                console.log(firstNum - secondNum);
                break;
            case "multiply" :
                console.log(firstNum * secondNum);
                break;
        }
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

//////////////////
// Assignment 3 //
//////////////////

function ageInTime(theAge) {
    if ( 10 < theAge  && theAge < 100) {
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 12 * 4} Weeks`);
        console.log(`${theAge * 12 * 4 * 7} Days`);
        console.log(`${theAge * 12 * 4 * 7 * 24} Hours`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60} Minutes`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`);
    }
    else {
        console.log("Age Out Of Range");
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


//////////////////
// Assignment 4 //
//////////////////

function checkStatus(a, b, c) {
    let name = typeof a === "string" ? a : typeof b === "string" ? b : typeof c === "string" ? c : undefined;
    let age = typeof a === "number" ? a : typeof b === "number" ? b : typeof c === "number" ? c : undefined;
    let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : typeof c === "boolean" ? c : undefined;

    if (status === true ) {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
    }
    else {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
    }

}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


//////////////////
// Assignment 5 //
//////////////////


function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (let i = startYear ; i <= endYear ; i++) {
        document.write(`<option value="${i}"> ${i}</option>`)
    }
    document.write(`</select>`)
}

createSelectBox(2000, 2021);

//////////////////
// Assignment 6 //
//////////////////


function multiply(...numbers){
    let mul = 1;
    for (let i = 0 ; i < numbers.length ; i++) {
        if (typeof numbers[i] === "string") {
            continue;
        }
        else {
            mul *= Math.floor(numbers[i]);
        }
    }
    console.log(mul);
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000