const query = require('./query.js');
module.exports = {
  userByUsername: (username, query=["username"]) => {
    query(`userByUsername(username: ${username}){${query.join(",")}}`);
  },
  userById: (id, query=["username"]) => {
    query(`user(id: ${id}){${query.join(",")}}`);
  },
  leaderboard: (count, query=["username"]) => {
    query(`userByUsername(username: ${username}){items{${query.join(",")}}}`);
  }
}
