import Blog from "@/models/blog.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";

databaseConnection();

export async function GET(request, { params }) {
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

    return NextResponse.json(
      {
        success: true,
        blog,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Fetching Blog Details", error);
    return NextResponse.json(
      {
        success: false,
        message: "Blog Details Fetching Failed",
      },
      {
        status: 500,
      }
    );
  }
}