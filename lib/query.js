module.exports = query => {
  return fetch("https://repl.it/graphql", {
     method: "POST",
     headers,
     body: JSON.stringify({
       query: `{\n  ${query}\n}`
     })
   }).then(e=>e.json()).catch(e=>console.error("replit query error:", e));
};
