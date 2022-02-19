const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "The filed name is a required filed!",
    },
    adress: {
      type: String,
      required: "The filed adress is a required filed!",
    },
    phone: {
      type: String,
      required: "The filed phone is a required filed!",
    },
    isAlive: {
      type: Boolean,
      required: "The filed isAlive is a required filed!",
    },
    birthday: {
      type: Date,
      required: "The filed birthday is a required filed!",
    },
  },
  {
    timestamps: true,
  }
);
authorSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("Author", authorSchema);
