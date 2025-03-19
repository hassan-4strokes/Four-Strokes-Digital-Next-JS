import User from "@/models/user.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";

databaseConnection();

export async function DELETE(request, { params }) {
  try {
    const { username } = params;

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User Not Found",
        },
        {
          status: 404,
        }
      );
    }

    await user.deleteOne({ username });

    return NextResponse.json(
      {
        success: true,
        message: "User Deleted Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Deleting User", error);
    return NextResponse.json(
      {
        success: false,
        message: "User Deletion Failed",
      },
      {
        status: 500,
      }
    );
  }
}
