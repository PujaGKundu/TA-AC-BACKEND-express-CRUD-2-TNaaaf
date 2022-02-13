var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema(
  {
    type: { type: String, required: true },
    bookId: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: true }
);

var Category = mongoose.model("Category", categorySchema);

module.exports = Category;
