'use strict';

// Array

// 1. Array Declaration.
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌', '🍐'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits[99]);

// 3. Looping over an array
// a. for
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}
// b. for .. of
for (let fruit of fruits) {
    // console.log(fruit);
}
// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// fruits.forEach(fruit => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end

fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
console.log(fruits.pop());
console.log(fruits.pop());

// unshift: add an item to the beginning
fruits.unshift('🍇','🍉');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);


// splice: remove an item by index position
fruits.push('🍍','🍒');
console.log(fruits);
fruits.splice(2);
console.log(fruits);
fruits.splice(1,1,'🍏','🍋');
console.log(fruits);

const fruits2 = ['🥑', '🍈', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.clear();
console.log(newFruits);
console.log(newFruits.indexOf('🥥'));
console.log(newFruits.includes('🍒'));

// lastIndexOf
console.clear();
console.log(fruits);
fruits.push('🍉');
console.log(fruits);
console.log(fruits.indexOf('🍉'));
console.log(fruits.lastIndexOf('🍉'));

console.clear();
let newarr1 = [1,2,3,4,5,6,7,8,9];
let newarr2 = [2,4,6,8,10];
console.log(newarr1.pop());
console.log(newarr1);
newarr1.push(newarr2);
console.log(newarr1);
console.log(typeof newarr1);
newarr1.pop();
let newarr3 = newarr1.concat(newarr2);
console.log(newarr3);
console.log(newarr2.join(','));
console.log(newarr3.reverse());
newarr3.shift();
console.log(newarr3);
console.log(newarr3.slice(2,4));

console.log(newarr3.sort());

console.log(newarr3.splice(3,9));
console.log(newarr3);
console.log(newarr3.splice(1));
console.log(newarr3);

// console.log(newarr1.every());

console.log(newarr2.toString());
console.log(newarr2.toLocaleString());