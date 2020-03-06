# REPL.IT QUERY
In this repl.it API, I plan to take advantage of everything. Adapted from [replya](https://www.npmjs.com/package/replya).
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
  ...
}
```
### query
```javascript
await client.query('userByUsername(username: "username"){karma}').karma;
```
### userByUsername
```javascript
await client.talk.userByUsername("username", ["karma"]).karma;
```
### userById
```javascript
await client.talk.userById(2222, ["karma"]).karma;
```
### leaderboard
```javascript
await client.talk.leaderboard(5, ["karma"])[0].karma; // top 5, the first person's karma
```
### commentById
```javascript
await client.talk.commentById(123456, ["title"]).title;
```
### posts
```javascript
await client.talk.posts(10, ["title"])[0].title; // newest post's title
```
### login
```javascript
await client.login("username", "password");
/*
=> {
  username: ...,
  email: ...,
  ...
  auth_jwt: ...,
  ...
}
*/
```
### getLoginKey
```javascript
await client.getLoginKey("username", "password"); // => 3Er%R4d3f...
```
## Errors
They will be in the following form.
`replit query error: ...`
Note that errors are put within a `.catch()` block.
## Credits
Special thanks to m3l0f1 to which this is adapted from [replya](https://www.npmjs.com/package/replya)
