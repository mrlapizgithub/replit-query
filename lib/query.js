module.exports = query => {
  return fetch("https://repl.it/graphql", {
     method: "POST",
     headers,
     body: JSON.stringify({
       query: `{${query}}`
     })
   }).then(e=>e.json()).catch(e=>console.error("replit query error:", e));
};
