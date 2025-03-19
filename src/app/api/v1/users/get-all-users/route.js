import User from "@/models/user.model";
import databaseConnection from "@/database/database.js";
import { NextResponse } from "next/server";

databaseConnection();

export async function GET() {
  try {
    const users = await User.find();
    return NextResponse.json(
      {
        success: true,
        users,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Fetching Users", error);
    return NextResponse.json(
      {
        success: false,
        message: "Users Fetching Failed",
      },
      {
        status: 500,
      }
    );
  }
}
