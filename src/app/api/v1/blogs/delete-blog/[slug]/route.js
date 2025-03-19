import Blog from "@/models/blog.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";

databaseConnection();


export async function DELETE(request, { params }) {
  try {
    const { slug } = params;

    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog Not Found",
        },
        {
          status: 404,
        }
      );
    }

    await Blog.deleteOne({ slug });

    return NextResponse.json(
      {
        success: true,
        message: "Blog Deleted Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Deleting Blog", error);
    return NextResponse.json(
      {
        success: false,
        message: "Blog Deletion Failed",
      },
      {
        status: 500,
      }
    );
  }
}
