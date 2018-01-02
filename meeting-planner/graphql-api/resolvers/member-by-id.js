const users = require("./users.json");

const id = process.argv[2] || "";
if (!id) {
  console.error(new Error("User ID argument is missing"));
  process.exit(1);
}
const user = users[id];
const isOrganisator = Boolean(
  Object.keys(user.memberOf).find(x => user.memberOf[x].isOrganisator)
);
console.log(JSON.stringify({ ...user, id, isOrganisator }));
