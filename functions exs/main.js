// Write a JavaScript function to print (console.log()) the “Hello World” message


function printHello(){
    console.log('hello world');
}

printHello();

// Write a function that returns the square of a number
 function square(number){
     result = number*number;
     return result;
 }

 console.log(square(4));

// Write a function to convert Celsius to Fahrenheit and return the conversion

function celsiusToFahrenheit(degree){
    result = degree*1.8 + 32
    return result;
}

console.log(celsiusToFahrenheit(28));

// Write a function to print a random number. Check out Math.random()

function printRandomNumber(){
    console.log(Math.random())
}

printRandomNumber();

// Write a function named tellFortune that:

function tellFortune(numOfChildren, job, spouse, location){
    alert(`You will be a ${job} in ${location}, and married to ${spouse} with ${numOfChildren} kids.`)
}

tellFortune(3, 'actor', 'shoshi', 'boston');
tellFortune(1, 'chef', 'yael', 'tel aviv');
tellFortune(3, 'waiter', 'shoshi', 'boston');

// Write a function that takes in a 7 digits number and returns the number as a string with commas as thousand separators. For example, the number 1234567 should be returned as "1,234,567"

function thousandCommas(number){
    let numToString = number.toString();
    console.log(numToString);
    let numberWithCommas = [numToString.slice(0, 1), ',', numToString.slice(1,4), ',', numToString.slice(4)].join('');
    console.log(`${numberWithCommas}`);
}

thousandCommas(3456339);


// Write a function that takes in a number and returns the number rounded to the nearest integer. 

function round(number){
    return Math.round(number);
}

console.log(round(2.3));
console.log(round(9.8));

// hostname alert

function welcomeHostName(){
    var hostname = location.hostname;
    alert(`Hello, your hostname is ${hostname}. Welcome!`);
}

welcomeHostName();

// Write a function that takes in a string and returns the string with all vowels removed

function vowelsRemover(someString){
    let newString = someString.split('e').join("");
    newString = newString.split('i').join("");
    newString = newString.split('o').join("");
    newString = newString.split('a').join("");
    newString = newString.split('u').join("");

    console.log(newString);
}

vowelsRemover('Hello world!');

