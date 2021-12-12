const model = require("./model");
const { v4: uuid } = require("uuid");
const path = require("path")
module.exports = {
  Create: async (req, res) => {
    const { token, text } = req.body;
    
    if (title && text) {
      const resP = await model.createP(title , text)
      res.status(200).send(resP);
    }
  },
};
