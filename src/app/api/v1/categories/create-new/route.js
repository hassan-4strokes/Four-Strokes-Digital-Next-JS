import Category from "@/models/category.model";
import databaseConnection from "@/database/database.js";
import { NextResponse } from "next/server";

databaseConnection();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, slug } = reqBody;

    const isSlugExists = await Category.findOne({ slug });

    if (isSlugExists) {
      return NextResponse.json(
        {
          success: false,
          message: "Category With This Slug Already Exists",
        },
        {
          status: 400,
        }
      );
    }

    const newSlug = slug.toLowerCase().replace(/ /g, "-");

    const isNameExists = await Category.findOne({ name });

    if (isNameExists) {
      return NextResponse.json(
        {
          success: false,
          message: "Category With This Name Already Exists",
        },
        {
          status: 400,
        }
      );
    }

    const category = await Category.create({
      name,
      slug: newSlug,
    });

    return NextResponse.json(
      {
        success: true,
        category,
        message: "Category Created Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Creating New Category", error);
    return NextResponse.json(
      {
        success: false,
        message: "Category Creation Failed",
      },
      {
        status: 500,
      }
    );
  }
}
