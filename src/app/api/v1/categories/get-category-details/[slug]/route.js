import Category from "@/models/category.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";

databaseConnection();

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    const category = await Category.findOne({ slug });

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Category Not Found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        category,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Fetching Category Details", error);
    return NextResponse.json(
      {
        success: false,
        message: "Category Details Fetching Failed",
      },
      {
        status: 500,
      }
    );
  }
}