const query = require('./query.js');
module.exports = {
  userByUsername: async (username, f=["username"]) => {
    return (await query(`userByUsername(username: "${username}"){${f.join(",")}}`)).userByUsername;
  },
  userById: async (id, f=["username"]) => {
    return (await query(`user(id: ${id}){${f.join(",")}}`)).user;
  },
  leaderboard: async (count, f=["username"]) => {
    return (await query(`leaderboard(count: ${count}){items{${f.join(",")}}}`)).leaderboard.items;
  }
};
