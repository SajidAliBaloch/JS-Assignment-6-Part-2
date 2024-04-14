// ============= Assignemnt 6 Part 2 ==============


// 1. Write a program that takes a positive integer from user & display the following in your browser. 

var number = +prompt()
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)

document.write(`number: ${number}`)
document.write("<br>")
document.write(`round off value: ${round}`)
document.write("<br>")
document.write(`floor value: ${floor}`)
document.write("<br>")
document.write(`ceil value: ${ceil}`)


// 2. Write a program that takes a negative floating point number from user & display the following in your browser. 

var number = -prompt()
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)

document.write(`number: ${number}`)
document.write("<br>")
document.write(`round off value: ${round}`)
document.write("<br>")
document.write(`floor value: ${floor}`)
document.write("<br>")
document.write(`ceil value: ${ceil}`)


// 3. Write a program that displays the absolute value of a  number. 


function absoluteValue(number) {
    if (number < 0) {
        return -number;
    } else {
        return number;
    }
}

document.write("Absolute value of -4 is " + absoluteValue(-4)); 
document.write("<br>")
document.write("Absolute value of 5 is " + absoluteValue(5));


// 4. Write a program that simulates a dice using random()  method of JS Math class. Display the value of dice in your  browser.:

var diceValue = Math.floor(Math.random() * 6) + 1;
var diceValue2 = Math.floor(Math.random() * 6) + 1;

document.write(`random dice value: ${diceValue}`)
document.write("<br>")
document.write(`random dice value: ${diceValue2}`)


// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 

var coinValue = Math.random();

var result = coinValue < 0.5 ? "Heads" : "Tails";
var number = coinValue < 0.5 ? "2" : "1";
var result1 = coinValue < 0.5 ? "Tails" : "Heads";
var number1 = coinValue < 0.5 ? "1" : "2";

document.write(number)
document.write("<br>")
document.write(`random coin value: ${result}`)
document.write("<br>")
document.write("<br>")
document.write(number1)
document.write("<br>")
document.write(`random coin value: ${result1}`)


// 6. Write a program that shows a random number between 1  and 100 in your browser.

var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write(`random number between 1 and 100: ${randomNumber}`)


// 7. Write a program that asks the user about his weight. Parse  the user input and display his weight in your browser.  

var userInput = prompt("Please enter your weight:")

var regex = /^(\d+(\.\d+)?)/
var match = userInput.match(regex)

if (match) {
    var weight = parseFloat(match[0])
    document.write("<p>Your weight is: " + weight + " kilograms</p>")
} else {
    document.write("<p>Invalid input. Please enter your weight in a valid format.</p>")
}


// 8. Write a program that stores a random secret number from  1 to 10 in a variable. Ask the user to input a number  between 1 and 10. If the user input equals the secret  number, congratulate the user.

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userInput = +prompt("Guess the secret number between 1 and 10:");

if (userInput === secretNumber) {
    alert("Congratulations! You guessed the secret number!");
} else {
    alert("Try again!");
}