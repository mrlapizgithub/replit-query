const fetch = require("node-fetch");
module.exports ={
  query: query => {
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Connection": "keep-alive",
      "X-Requested-With": "any",
      "Referrer": "https://repl.it",
      "Origin": "https://repl.it"
    };
    return fetch("https://repl.it/graphql", {
       method: "POST",
       headers,
       body: JSON.stringify({
         query: `{${query}}`
       })
     }).then(async e => {
       return (await e.json()).data;
     }).catch(e => console.error("replit query error:", e));
  },
  login: (username, password) => {
    return fetch("https://repl.it/login", {
      method: "POST",
      headers,
      body: JSON.stringify({username, password})
    }).then(e => e.json()).catch(e => console.error("replit query error:", e))
  },
  getLoginKey: (username, password) => {
    return fetch("https://repl.it/login", {
      method: "POST",
      headers,
      body: JSON.stringify({username, password})
    }).then(e => e.headers.get('connect.sid')).catch(e => console.error("replit query error:", e))
  },
}
