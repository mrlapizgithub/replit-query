module.exports = {
  userByUsername: (username, query=["username"]) => {
    console.log(require("./query.js"))
    //require("./query.js").query(`userByUsername(username: ${username}){${query.join(",")}}`);
  },
  leaderboard: count => {
    console.log(require("./query.js"))
    //require("./query.js").query(`userByUsername(username: ${username}){${query.join(",")}}`);
  }
}
