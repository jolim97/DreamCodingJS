'use strict';

// Objects
// object = { key : value }

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jongwon = { name: 'jongwon', age: 24 };
print(jongwon);

jongwon.hasJob = true;
console.log(jongwon.hasJob);
delete jongwon.hasJob;
console.log(jongwon.hasJob);

// 2. Computed properties
console.log(jongwon.name);
console.log(jongwon['name']); // string type key
jongwon['hasJob'] = true;
console.log(jongwon['hasJob']);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(jongwon, 'name');
printValue(jongwon, 'age');


// 3. Property value shorthand

const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('jongwon', 24);
console.log(person4)

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = age;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check
console.log('name' in jongwon);
console.log('height' in jongwon);
console.log(jongwon.random);


// 6. for .. in vs for .. of
// for (key in obj)
console.clear()
for (let key in jongwon) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

for (let value of array) {
    console.log(value)
}

// 7. Fun cloning

const user = { name: ' jongwon', age: 24 };
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);