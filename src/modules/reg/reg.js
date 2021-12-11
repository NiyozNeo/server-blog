const model = require("./model");
const bcrypt = require("bcrypt");
const { signUser } = require("../../lib/jwt");

module.exports = {
  REGISTER: async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(username, password);
      if (username && password) {
        Number(password);
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);

        const existing = await model.exists(username);
        if (existing) {
          res.status(400).send("Already exists...");
          return;
        }
        console.log("maymun");
        console.log(username, bcryptPassword);
        const newUser = await model.register(username, bcryptPassword);
        console.log(newUser);

        if (newUser) {
          res.status(201).json({
            message: "User created",
            token: signUser({
              user_id: newUser[0].user_id,
              is_admin: newUser[0].is_admin,
            }),
          });
          return
        }
        res.send("xatolik yuz berdi db bo'yicha")
      }
    } catch (e) {
      console.log(e.message);
    }
  },
};
