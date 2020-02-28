const query = require('./query.js');
module.exports = {
  userByUsername: (username, f=["username"]) => {
    return query(`userByUsername(username: "${username}"){${f.join(",")}}`);
  },
  userById: (id, f=["username"]) => {
    return query(`user(id: ${id}){${f.join(",")}}`);
  },
  leaderboard: (count, query=["username"]) => {
    return query(`userByUsername(username: "${username}"){items{${f.join(",")}}}`);
  }
}
