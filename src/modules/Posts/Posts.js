const model = require("./model");
module.exports = {
  get: async (_, res) => {
        const data = await model.get
        res.status(200).send(data) 
  },
};
