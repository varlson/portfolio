const mongoose = require("mongoose");
const about = new mongoose.Schema({
  about: {
    type: Array,
  },
  fields: {
    type: String,
  },
  search: {
    type: String,
  },
});

module.exports = mongoose.model("About", about);
