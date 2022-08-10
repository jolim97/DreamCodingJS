// Function
// - fundamental building block in the program

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function === one thing


function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}

log('Hello@');


// 2. Parameters

function changeName(obj) {
    obj.name = 'coder';
}

const jongwon = { name: 'jongwon' };
changeName(jongwon);
console.log(jongwon.name);


// 3. Default parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

// 4. Rest parameters
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'jongwon');


// 5. Local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hi';
    }
    // console.log(childMessage);
}
// console.log(message);
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);

// 7. Early return
function upgradeUser(user) {
    if (user.point <= 10) {
        return; // Fast return!!
    }
}

// First-class function
// 1. Function expression
// a function decalaration can be called earlier than it is defined. (Hoisted!)
const print = function () { // anonymous function
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes(); // Callback function
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
};

// Named Function for better debuging.
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
}
const simplePrints = () => console.log('simplePrints')
// const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

function calculate(command, a, b) {
    console.log(command(a, b));
}

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function remainder(a, b) {
    return a % b;
}

calculate(add, 3, 4);
calculate(substract, 3, 4);
calculate(divide, 3, 4);
calculate(multiply, 3, 4);
calculate(remainder, 3, 4);