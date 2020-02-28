# REPL.IT QUERY
In this repl.it API, I plan to take advantage of everything.
## Primitive usage
```javascript
const replit = require("replit-query");
const client = new replit();
await client.login("username", "password");
...
```
## Documentation
Each of these examples will require an instance of the client.
```javascript
const client = require("replit-query")(headers);
```
### Query
This is the root of basically all applications.
**PARAMS**
*query*: This is what will be your query. It will be implemented like this:
```
{
  query
}
```
You may want to read up on [graphQL](https://graphql.org/).
**RETURN**
A return value will look something like
```json
{
  "data": {
    ...
  }
}
```
## Errors
They will be in the following form.
`replit query error: ...`
Note that errors are put within a `.catch()` block.
