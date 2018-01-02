const groups = require("./groups.json");
const users = require("./users.json");

const userId = process.argv[2] || "";
if (!userId) {
  console.error(new Error("User ID argument is missing"));
  process.exit(1);
}

const user = users[userId];

const groupsByUser = Object.keys(user.memberOf).map(id => ({
  ...groups[id],
  id
}));

// const uniqueGroupsByUser = [...new Set(groupsByUser)].map(id => ({
//   ...groups[id],
//   id
// }));

console.log(JSON.stringify(groupsByUser || null));
