'use strict';
// JSON

// 1. Object to JSON
// stringify (obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json)

const rabbit = {
    name: 'tory',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};


// replacer
json = JSON.stringify(rabbit, ["name","birthDate"]);
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "name" ? "jongwon" : value;
});

console.log(json);

// 2. JSON to Object

console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();  // Function not serialized.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());