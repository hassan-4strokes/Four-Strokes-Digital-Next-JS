import User from "@/models/user.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";

databaseConnection();

export async function PUT(request, { params }) {
  try {
    const { username } = params;

    const reqBody = await request.json();
    const { name, userUsername, email, role } = reqBody;

    const user = await User.findOneAndUpdate(
      { username },
      { name, username: userUsername, email, role },
      { new: true, runValidators: true, useFindAndModify: false }
    );

    return NextResponse.json(
      {
        success: true,
        message: "User Updated Successfully",
        user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Updating User", error);
    return NextResponse.json(
      {
        success: false,
        message: "User Updating Failed",
      },
      {
        status: 500,
      }
    );
  }
}