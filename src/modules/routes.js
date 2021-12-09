const express = require("express");

const Reg = require("./reg/reg");
const Login = require("./Login/Login");
const Delete = require("./Admin/DeletePost/DeletePost");
const CreatePost = require("./Admin/CreatePost/CreatePost");
const Posts = require("./Posts/Posts");
const router = express.Router();

router
  .post("/reg", Reg.REGISTER)
  .post("/login", Login.Login)
  .post("/createpost" , CreatePost.Create)
  .post("/delete", Delete.post)
  .get("/posts", Posts.get)

module.exports = router;
