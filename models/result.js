var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var resultSchema = new Schema({
  result: {
    type: String,
    required: true,
  },
  class: {
    type: mongoose.Types.ObjectId,
    ref: "Class",
  },
});

module.exports = mongoose.model("Result", resultSchema);
