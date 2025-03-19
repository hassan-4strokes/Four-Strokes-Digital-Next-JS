import User from "@/models/user.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";
import { authToken } from "@/helpers/AuthToken";

databaseConnection();

export async function GET(request) {
  try {
    
    const userId = await authToken(request);

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json(
      { message: "User details fetching failed" },
      { status: 500 }
    );
  }
}
