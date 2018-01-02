const users = require("./users.json");

const groupId = process.argv[2] || "";
if (!groupId) {
  console.error(new Error("Group ID argument is missing"));
  process.exit(1);
}

const usersByGroups = Object.keys(users)
  .map(id => ({
    ...users[id],
    id
  }))
  .filter(x => x.memberOf[groupId])
  .map(x => ({
    ...x,
    isOrganisator: x.memberOf[groupId].isOrganisator
  }));

console.log(JSON.stringify(usersByGroups || null));
