const talk = require("./lib/talk.js");
const query = require("./lib/query.js");

const client = () => {
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "X-Requested-With": "any",
    "Referrer": "https://repl.it",
    "Origin": "https://repl.it"
  };
  return {
    headers,
    query,
    login: (username, password) => {
      return fetch("https://repl.it/login", {
        method: "POST",
        headers,
        body: JSON.stringify({username, password})
      }).then(e => e.json()).catch(e => console.error("replit query error:", e))
    },
    talk
  };
};/*
(async () => {
  console.log(await client().talk.leaderboard(5, ["username", "karma"]));
})()*/
module.exports = client;
