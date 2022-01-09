var express = require("express");
var router = express.Router();
var Result = require("../models/result");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/results/classes/:id", function (req, res, next) {
  Result.find({ class: req.params.id }).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
});

module.exports = router;
