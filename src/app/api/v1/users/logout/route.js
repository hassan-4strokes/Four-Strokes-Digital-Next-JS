import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {

    const response = NextResponse.json(
      {
        success: true,
        message: "User Logged Out Successfully",
      },
      {
        status: 200,
      }
    );

    response.cookies.set("token", "", {
      httpOnly: true,
      secure: true,
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    console.error("Some Error Occured While Loggin Out User", error);
    return NextResponse.json(
      {
        success: false,
        message: "User Logout Failed",
      },
      {
        status: 500,
      }
    );
  }
}
