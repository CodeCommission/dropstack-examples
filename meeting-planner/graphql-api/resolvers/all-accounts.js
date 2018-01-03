const users = require("./users.json");

const usersAsArray = Object.keys(users).reduce(
  (s, n) => [...s, { ...users[n], id: n }],
  []
);
console.log(JSON.stringify(usersAsArray));
