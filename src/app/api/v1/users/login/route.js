import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "@/models/user.model";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";

databaseConnection();
export async function POST(request) {
  try {

    const reqBody = await request.json();
    const { username, password } = reqBody;

    const user = await User.findOne({ username }).select("+password");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User Does Not Exists",
        },
        {
          status: 404,
        }
      );
    }
    
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Credentials",
        },
        {
          status: 401,
        }
      );
    }


    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      isAuthenticated: user,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "User Logged In Successfully",
        user
      },
      {
        status: 201,
      }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
    });

    return response;
  } catch (error) {
    console.error("Some Error Occured While Loggin In User", error);
    return NextResponse.json(
      {
        success: false,
        message: "User Login Failed",
      },
      {
        status: 500,
      }
    );
  }
}
