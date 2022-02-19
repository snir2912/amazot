const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "The filed name is a required filed!",
    },
    publishDate: {
      type: Date,
      required: "The filed publish Date is a required filed!",
    },
    author: {
      type: String,
      required: "The filed author is a required filed!",
      ref: "author",
    },
    isInStock: {
      type: Boolean,
      required: "The filed isInStock is a required filed!",
    },
  },
  {
    timestamps: true,
  }
);
bookSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("Book", bookSchema);
