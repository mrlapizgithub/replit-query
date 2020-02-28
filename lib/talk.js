module.exports = {
  userByUsername: (username, query=["username"]) => {
    require("./query.js").query(`userByUsername(username: ${username}){${query.join(",")}}`);
  },
  leaderboard: count => {
    require("./query.js").query(`userByUsername(username: ${username}){${query.join(",")}}`);
  }
}
