const query = require('./lib/query.js');
module.exports = {
  userByUsername: (username, query=["username"]) => {
    query(`userByUsername(username: ${username}){${query.join(",")}}`);
  },
  userById: (username, query=["username"]) => {
    query(`user(id: ${username}){${query.join(",")}}`);
  },
  leaderboard: (count, query=["username"]) => {
    query(`userByUsername(username: ${username}){items{${query.join(",")}}}`);
  }
}
