const fetch = require("node-fetch");
const client = () => {
  this.prototype = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Connection": "keep-alive",
      "X-Requested-With": "coder100",
      "Referrer": "https://repl.it",
      "Origin": "https://repl.it"
    },
    query: query => {
      return await fetch("https://repl.it/graphql", {
         method: "POST",
         headers,
         body: JSON.stringify({
           query: `{\n  ${query}\n}`
         })
       }).then(e=>e.json());
    },
    login: (username, password) => {

    },
    getUserByUsername: (username, query=["username"]) => {
      this.query(`userByUsername(username: ${username})`)
    }
  };
};
module.exports = client;
