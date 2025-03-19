import Blog from "@/models/blog.model";
import databaseConnection from "@/database/database.js";
import { NextResponse } from "next/server";

databaseConnection();

export async function GET() {
  try {
    const blogs = await Blog.find();
    return NextResponse.json(
      {
        success: true,
        blogs,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Fetching Blogs", error);
    return NextResponse.json(
      {
        success: false,
        message: "Blogs Fetching Failed",
      },
      {
        status: 500,
      }
    );
  }
}
