const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    // required: true,
    trim: true,
  },
  helpingVerb: {
    type: String,
    // required: true,
    trim: true,
  },
  orderControl: {
    type: String,
    // required: true,
    trim: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
