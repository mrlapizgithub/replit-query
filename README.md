# REPL.IT QUERY
In this repl.it API, I plan to take advantage of everything.
## Primitive usage
```javascript
const replit = require("replit-query");
const client = new replit();
await client.login("username", "password");
...
```
## Errors
They will be in the following form.
`replit query error: ...`
Note that errors are put within a `.catch()` block.
