// console.log("Hello World!");

// 1. Use strict
'use strict';

// 2. Variable
// let (mutable datatype)
let globalName = 'global Name';
{
    let name = 'jongwon';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (not use)
// var hoisting (move declaration from bottom to top)

// 3. Constants
// const (favor immutable data type always)

const maxNumbers = 3;

// 4. Variable types
// Primitive type
//   : number, string, boolean, null, undefined, symbol
// Object type
//   : function, first-class function

const count = 17;
const size = 16.2;
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigint (Larger than 2^53)
const bigInt = 123132123123123123123123123123123123123123n;
console.log(typeof bigInt);

const jongwon = 'jongwon';
const helloJongwon = `hi ${jongwon}`;
console.log(helloJongwon);

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`${symbol1.description}`)


// 5. Dynamic typing: dynamically typed language
console.log(5 + '1');
console.log('8' / '2');
let text = 'hello';
console.log(text.charAt(0));