const pg = require("../../../lib/postgres");

const query = `
   delete from posts where post_id = $1 RETURNING *
`;

const delet = (id) => pg(query, id);

module.exports = {
  delet,
};
