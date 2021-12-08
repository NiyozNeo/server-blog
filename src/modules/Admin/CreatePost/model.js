const pg = require("../../../lib/postgres");

const query = `
    insert into posts(post_title , post_text , post_img) values ($1 , $2 , $3) RETURNING *
`;

const createP = (title, text, img) => pg(query, title, text, img);

module.exports = {
    createP,
};
