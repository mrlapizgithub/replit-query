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
  },
  commentById: async (id, f=["title"]) => {
    return (await query(`comment(id: ${id}){${f.join(",")}}`)).comment;
  },
  posts: async (count, f=["id"]) => {
    return (await query(`posts(count: ${count}){${f.join(",")}}`)).posts.items;
  },
  repls: async (count, f=["title"]) => {
    return (await query(`newRepls(count: ${count}){items{${f.join(",")}}}`)).newRepls.items;
  }
};
