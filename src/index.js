const express = require("express");
const app = express();

const { PORT } = require("./config/config");

const cors = require("cors");
const routes = require("./modules/routes");
const path = require("path")

app.use(require("express-fileupload")());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};



app.use(cors(corsOptions));
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(routes);

app.listen(PORT, () => console.log(PORT));
