import Category from "@/models/category.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";

databaseConnection();


export async function DELETE(request, { params }) {
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

    await Category.deleteOne({ slug });

    return NextResponse.json(
      {
        success: true,
        message: "Category Deleted Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Deleting Category", error);
    return NextResponse.json(
      {
        success: false,
        message: "Category Deletion Failed",
      },
      {
        status: 500,
      }
    );
  }
}
