const noUnionArgs = require("./no-union-args");
const plugin = {
  meta: {
    name: "eslint-plugin-dipal",
    version: "1.2.3",
  },
  rules: { "no-union-args": noUnionArgs },
};
module.exports = plugin;
