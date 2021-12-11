const pg = require("../../lib/postgres");

const REGISTER = `
    INSERT INTO
        users(
          user_username, 
          user_password,
        )
    VALUES ($1, $2, $3)
    RETURNING
            *
`;

const EXISTING_USER = `
    SELECT * FROM users WHERE user_name = $1
`;

const exists = (username) => pg(EXISTING_USER, username);
const register = (username, password) =>
  pg(REGISTER, username, password);

module.exports = {
  register,
  exists,
};
