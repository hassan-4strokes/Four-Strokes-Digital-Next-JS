import Category from "@/models/category.model";
import databaseConnection from "@/database/database.js";
import { NextResponse } from "next/server";

databaseConnection();

export async function GET() {
  try {
    const categories = await Category.find();
    return NextResponse.json(
      {
        success: true,
        categories,
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
