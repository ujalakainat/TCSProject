var mongoose = require("mongoose");

var schema = mongoose.Schema;

var materialSchema = new schema({
  coursename: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Material", materialSchema);
