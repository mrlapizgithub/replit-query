const fetch = require("node-fetch");

const talk = require("./lib/talk.js");
const query = require("./lib/query.js");

const client = headers => {
  return {
    headers: headers || {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Connection": "keep-alive",
      "X-Requested-With": "coder100",
      "Referrer": "https://repl.it",
      "Origin": "https://repl.it"
    },
    query,
    login: (username, password) => {
      //
    },
    talk
  };
};
//console.log(client().talk.userByUsername("coder100"))
module.exports = client;
