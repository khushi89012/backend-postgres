const jwt = require("jsonwebtoken");
const Config = require("../configuration/config");




module.exports = {
  user_add: async (req, res, next) => {
 
      if (Number.isInteger(req.user.roll_n) && req.user.roll_n > 0) {
       
        next();
      
    } else {
      let return_err = { status: 5, message: "Invalid user data" };
      return res.status(401).json(return_err);
    }
  },
};
