const express = require("express");

const Reg = require("./reg/reg");
const Login = require("./Login/Login");
const AdminUsers = require("./Admin/Users/Users");
const Verify = require("./Admin/Verify/Verify");
const Delete = require("./Admin/Delete/Delete");
const router = express.Router();

router
  .post("/reg", Reg.REGISTER)
  .post("/login", Login.Login)
  .get("/admin/users", AdminUsers.Clinics)
  .post("/update", Verify.post)
  .post("/delete", Delete.post);

module.exports = router;
