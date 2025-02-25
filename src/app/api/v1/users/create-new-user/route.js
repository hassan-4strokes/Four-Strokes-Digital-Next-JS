import bcrypt from "bcrypt";
import User from "@/models/user.model";
import databaseConnection from "@/lib/database";
import { NextResponse } from "next/server";

databaseConnection();
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, username, email, password, role } = reqBody;

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return NextResponse.json(
        {
          success: false,
          message: "User Already Exists",
        },
        {
          status: 400,
        }
      );
    }

    if (name.length < 3) {
      return NextResponse.json(
        {
          success: false,
          message: "Name Should Have Atleast 3 Characters",
        },
        {
          status: 400,
        }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      username,
      email,
      password: hashPassword,
      role,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User Created Successfully",
        user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Some Error Occured While Creating New User", error);
    return NextResponse.json(
      {
        success: false,
        message: "User Creation Failed",
      },
      {
        status: 500,
      }
    );
  }
}
