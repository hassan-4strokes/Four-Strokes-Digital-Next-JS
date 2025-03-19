import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Category Name"],
      minLength: [3, "Category Name Should Have Atleast 3 Characters"],
      unique: [true, "Category Name Already Exists"],
    },

    slug: {
      type: String,
      required: [true, "Please Enter Category Slug"],
      unique: [true, "Category Slug Already Exists"],
      lowercase: [true, "Category Slug Should Be In Lowercase"],
      trim: [true, "Category Slug Should Not Contain Spaces"],
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models?.categories || mongoose.model("categories", categorySchema);

export default Category;
