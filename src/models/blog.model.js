import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter A Title"],
      minLength: [3, "Title Should Have Atleast 3 Characters"],
    },
    slug: {
      type: String,
      unique: [true, "Blog Slug Already Exists"],
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
    },
    canonical: {
      type: String,
      required: [true, "Please Enter A Canonical URL"],
    },
    description: {
      type: String,
      required: [true, "Please Enter A Description"],
      minLength: [10, "Description Should Have Atleast 10 Characters"],
    },
    thumbnail: {
      type: String,
      required: [true, "Please Upload A Thumbnail"],
    },
    alternateText: {
      type: String,
      required: [true, "Please Enter An Alternate Text For Your Thumbnail"],
    },
    intro: {
      type: Object,
      required: [true, "Please Enter Blog Intro Paragraph"],
    },
    content: {
      type: Object,
      required: [true, "Please Enter Content"],
    },
    metaTitle: {
      type: String,
      required: [true, "Please Enter A Meta Title"],
      minLength: [3, "Meta Title Should Have Atleast 3 Characters"],
    },
    metaDescription: {
      type: String,
      required: [true, "Please Enter A Meta Description"],
      minLength: [10, "Meta Description Should Have Atleast 10 Characters"],
    },
    primaryKeyword: {
      type: String,
      required: [true, "Please Enter A Primary Keyword"],
    },
    tableOfContent: [
      {
        name: String,
        link: String,
      },
    ],
    faq: [
      {
        question: String,
        answer: String,
      },
    ],
    draft: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
