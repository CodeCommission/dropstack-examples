const appPackage = require("./package.json");
const mappings = require("./.dropstack.json").mappings;

module.exports = async () =>
  Object.keys(mappings).reduce(
    (state, next) => {
      state[next] = `https://${process.env.HOSTNAME}${next}`;
      return state;
    },
    { version: appPackage.version }
  );
