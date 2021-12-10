const model = require("./model");
const { v4: uuid } = require("uuid");
const path = require("path")
module.exports = {
  Create: async (req, res) => {
    const { title, text } = req.body;

    if (poster && title && text) {
      const newName = `${uuid()}.${poster.mimetype.split("/")[1]}`;
      poster.mv(
        path.join(process.cwd() + "/src/uploads/" + newName),
        (_) => {}
      );
      const resP = await model.createP(title , text , newName)
      res.status(200).send(resP);
    }
  },
};
