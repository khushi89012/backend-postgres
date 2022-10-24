const express = require("express");
const { authenticate } = require("passport");
const passport = require("passport");
require("../passport");
const studentController = require("../controllers/user.controller");
const admcontroller = require("../controllers/admcontroller");
const {
  validateBody,
  validateParam,
  schemas,
} = require("../helpers/admValidate");
const { add_user, update_user } = require("../helpers/userDB.validate");

const userModel = require("../models/addUser");

const passportlogIn = passport.authenticate("localAdm", { session: false });
const passportDataAdd = passport.authenticate("jwt", { session: false });
const router = express.Router();

router.post(
  "/login",
  validateBody(schemas.authSchema),
  passportlogIn,
  admcontroller.handle_login,
  admcontroller.login
);

router.post("/addata", 
// add_user(userModel), //creating error 
  passportDataAdd,
   studentController.user_add);

  //  router.put('/update/:id', 
  //  update_user(userModel), //creating error

  //  passportDataAdd,
  //  studentController.user_add);

module.exports = router;
