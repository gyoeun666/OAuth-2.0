const myDataSource = require("./db.config");

const createUser = async (email, nick, snsId) => {
  const user = await myDataSource.query(
    `INSERT INTO users(email, password, name, sns_id)
      VALUES (?, ?, ?, ?)
      `,
    [email, "0000", nick, snsId],
  );
  return user;
};

const findOne = async (snsId) => {
  const [user] = await myDataSource.query(
    `SELECT *
      FROM users
      WHERE snsId = ?`,
    [snsId],
  );
  return user;
};

module.exports = { createUser, findOne };
