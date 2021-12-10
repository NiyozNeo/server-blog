const pg = require("../../../lib/postgres");

const query = `
    insert into comments(comment_author , comment_text) values ($1 , $2) RETURNING *
`;

const createP = (author, text) => pg(query, author, text);

module.exports = {
    createP,
};
