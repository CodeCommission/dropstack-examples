const groups = require("./groups.json");
const groupsAsArray = Object.keys(groups).map(id => ({ ...groups[id], id }));
console.log(JSON.stringify(groupsAsArray));
