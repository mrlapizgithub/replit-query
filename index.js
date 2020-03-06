const talk = require("./lib/talk.js");
const query = require("./lib/query.js");

const client = () => {
  return {
    query: query.query,
    login: query.login,
    getLoginKey: query.getLoginKey,
    talk
  };
};
module.exports = client;
