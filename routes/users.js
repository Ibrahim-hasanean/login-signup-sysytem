var express = require("express");
var router = express.Router();
const code = require("../models/code");
const User = require("../models/user");
/* GET users listing. */
router.get("/private", function(req, res, next) {
  res.status(200);
  res.json({
    status: 200,
    message: "hello from private route " + req.body.user.name,
    email: req.body.user.email,
    id: req.body.user._id
  });
});

router.post("/logout", (req, res, next) => {
  res.clearCookie("access_token");
  //res.redirect("/login");
  return res.send("logout");
});

module.exports = router;
