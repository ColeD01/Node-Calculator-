const readline = require("readline-sync")

const numInput1 = readline.keyIn("Please enter your first number")
let num1 = Number (numInput1)
console.log(numInput1)

const numInput2 = readline.keyIn("Please enter your second number")
let num2 = Number(numInput2)
console.log(numInput2)

const equationT = readline.keyIn("did you want to (a)dd, (s)ubtract, (m)ultiply, or (d)ivide")
console.log(equationT)

if(equationT === "a") {

    console.log("Your Result is " + answerA(num1, num2)) // function declaration (calling it to use it)
} else if(equationT === "s") {
    console.log("your result is " + answerS(num1, num2))
} else if (equationT === "m") {
    console.log("your result is " + answerM(num1, num2))
} else if (equationT === "d") {
    console.log("your Result is " + answerD(num1, num2))
}

// function definition
function answerA (num1, num2) {
    // parseInt
    return num1 + num2
}
function answerS (num1, num2) {
    return num1 - num2
}
function answerM(num1, num2){
    return num1 * num2
}
function answerD(num1, num2) {
    return num1 / num2
}
