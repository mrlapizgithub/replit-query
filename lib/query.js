module.exports = query => {
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
   }).then(e => e.json()).catch(e => console.error("replit query error:", e));
};
