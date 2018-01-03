const fs = require('fs');
const path = require('path');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);

const operationName = path.parse(process.argv[1]).name;
const command = JSON.parse(process.argv[2]);
const userId = process.argv[3];

const groups = require('./groups.json');
const users = require('./users.json');

guard(command, ['groupId', 'groupName', 'organisatorIds', 'memberIds'])
  .then(() =>
    appendFile(
      path.join(__dirname, 'event-log.json'),
      `${JSON.stringify({timestamp: Date.now(), topic: operationName, userId, ...command})}\n`
    )
  )
  .then(() => {
    groups[command.groupId] = {
      name: command.groupName
    };
    return groups;
  })
  .then(data => writeFile(path.join(__dirname, 'groups.json'), JSON.stringify(data, null, 2)))
  .then(() => {
    users[userId].memberOf[command.groupId] = {isOrganisator: true};
    command.memberIds.forEach(x => {
      users[x].memberOf[command.groupId] = {isOrganisator: false};
    });
    return users;
  })
  .then(data => writeFile(path.join(__dirname, 'users.json'), JSON.stringify(data, null, 2)))
  .then(() => {
    console.log(JSON.stringify({...groups[command.groupId], id: command.groupId}));
    process.exit(0);
  })
  .catch(error => {
    if (Array.isArray(error)) error.forEach(x => console.error(x.message));
    else console.error(error.message);
    process.exit(1);
  });

function guard(input = {}, required = []) {
  const validations = required.map(x => (input[x] ? undefined : new Error(`Input ${x} is missing.`)));

  return validations.every(x => x == undefined)
    ? Promise.resolve(validations.filter(x => x))
    : Promise.reject(validations.filter(x => x));
}
