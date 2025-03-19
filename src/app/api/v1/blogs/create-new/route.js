import Blog from "@/models/blog.model";
import Category from "@/models/category.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";
import cloudinary from "@/helpers/cloudinary";

databaseConnection();

export async function POST(request) {

  const formData = await request.formData();


  const thumbnail = formData.get("thumbnail");
  const title = formData.get("title");
  const slug = formData.get("slug");
  const category = formData.get("category");
  const canonical = formData.get("canonical");
  const description = formData.get("description");
  const alternateText = formData.get("alternateText");
  const metaTitle = formData.get("metaTitle");
  const metaDescription = formData.get("metaDescription");
  const primaryKeyword = formData.get("primaryKeyword");
  const tableOfContent = JSON.parse(formData.get("tableOfContent"));
  const faq = JSON.parse(formData.get("faq"));
  const content = JSON.parse(formData.get("content"));
  const intro = JSON.parse(formData.get("intro"));
  try {
    const arrayBuffer = await thumbnail.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream((error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        })
        .end(buffer);
    });

    const categoryID = await Category.findById(category);

    const blog = await Blog.create({
      title,
      slug,
      category: categoryID._id,
      canonical,
      description,
      thumbnail: {
        url: uploadResponse?.secure_url || "",
      },
      alternateText,
      metaTitle,
      metaDescription,
      primaryKeyword,
      tableOfContent,
      faq,
      content,
      intro,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Blog Created Successfully",
        blog,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Creating New Blogs", error);
    return NextResponse.json(
      {
        success: false,
        message: "Blogs Creation Failed",
      },
      {
        status: 500,
      }
    );
  }
}
