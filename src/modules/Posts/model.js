const pg = require("../../lib/postgres");

const query = `
   select * from posts
`;

const get = pg(query);

module.exports = {
    get,
};
