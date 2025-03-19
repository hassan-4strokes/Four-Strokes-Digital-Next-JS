import Category from "@/models/category.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";

databaseConnection();

export async function PUT(request, { params }) {
  try {
    const { slug } = params;

    const reqBody = await request.json();
    const { name, userSlug } = reqBody;

    // const normalizeSlug = (slug) => {
    //   return slug
    //     .toLowerCase()
    //     .replace(/\s+/g, "-")
    //     .replace(/[^\w\-]+/g, "")
    //     .replace(/-+/g, "-")
    //     .replace(/^-+/, "")
    //     .replace(/-+$/, "");
    // };

    // const updatedSlug = normalizeSlug(userSlug);

    // const existingCategory = await Category.findOne({ slug: updatedSlug });
    // if (existingCategory && existingCategory.slug !== slug) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Category With This Slug Already Exists",
    //     },
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    const category = await Category.findOneAndUpdate(
      { slug },
      { name, slug: userSlug },
      { new: true, runValidators: true, useFindAndModify: false }
    );

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
        message: "Category Updated Successfully",
        category,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Updating Category", error);
    return NextResponse.json(
      {
        success: false,
        message: "Category Updating Failed",
      },
      {
        status: 500,
      }
    );
  }
}
