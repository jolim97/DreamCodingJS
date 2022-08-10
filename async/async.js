"use strict";

// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  //do network request in 10 secs ...
  // return "jongwon";
  return "jongwon";
}

const user = fetchUser();
console.log(user);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  // throw "error";
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
  // return getApple().then((apple) => {
  //   return getBanana().then((banana) => `${apple} + ${banana}`);
  // });
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

class UserStorage {
  async loginUser(id, password) {
    await 1000;
    if (
      (id === "ellie" && password === "dream") ||
      (id === "coder" && password === "academy")
    ) {
      return id;
    } else {
      throw "not Found";
    }
  }

  async getRoles(user) {
    await 1000;
    if (user === "ellie") {
      return { name: "ellie", role: "admin" };
    } else {
      throw "no Access";
    }
  }

  async getUserWithRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
    return role;
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
console.log(userStorage);
userStorage //
  .getUserWithRole(id, password)
  .catch(console.log)
  .then(console.log);
