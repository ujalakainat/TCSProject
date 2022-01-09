var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.delete("/material/:id", function (req, res, next) {
  Material.deleteOne({ _id: req.params.id }, function (error, material) {
    if (error) {
      return next(error);
    }
    res.json(material);
  });
});

module.exports = router;
