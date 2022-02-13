var mongoose = require("mongoose");
const Category = require("./category");
var Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    pages: Number,
    publication: String,
    cover_image: Image,
    authorId: { type: String, ref: "Author" },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
