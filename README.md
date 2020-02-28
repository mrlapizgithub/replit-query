# REPL.IT QUERY
In this repl.it API, I plan to take advantage of everything.
## Quickstart
```javascript
const replit = require("replit-query")();
await replit.login("username", "password");
...
```
## Documentation
Each of these examples will require an instance of the client.
```javascript
const client = require("replit-query")();
```
## Query
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
### query
```javascript
await client.query('userByUsername(username: "username"){id,karma}').data.karma;
```
### userByUsername
```javascript
await client.talk.userByUsername("username", ["id", "karma"]).data.karma;
```
### userById
```javascript
await client.talk.userById("id", ["id", "karma"]).data.karma;
```
### leaderboard
```javascript
await client.talk.leaderboard(5).data.items[0].karma; // top 5, the first person's karma
```
### login
```javascript
await client.login("username", "password");
/*
=> {
  username: ...,
  email: ...,
  ...
  auth_jwt: ...
}
*/
```
## Errors
They will be in the following form.
`replit query error: ...`
Note that errors are put within a `.catch()` block.
