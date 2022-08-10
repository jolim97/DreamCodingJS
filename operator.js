// 1. String Concatenation
console.log('my' + 'cat');
console.log('Jongwon\'s cat')

// 2. Numeric Operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(1 ** 1);

// 3. Increment and decrement operators
let counter = 2;
const preIncremenent = ++counter;
const postIncremenent = counter++;

// 4. Assignement operators
let x = 3;
let y = 6;

// 5. Comparison operators

// 6. Logical operators: || && !
const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);

console.log(`and: ${value1 && value2 && check()}`);


function check() {
    for (let i = 0; i > 10; i++) {
        // wasting time
        console.log('hehe');
    }
    return true;
}

// 7. Equality

const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const object1 = { name: 'jongwon' };
const object2 = { name: 'jongwon' };
const object3 = object1;

console.log(object1 == object2);
console.log(object1 === object2);
console.log(object1 == object3);


for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        continue;
    }
}

let j = 0
while (j <= 8) {
    console.log(j)
    j++;
}