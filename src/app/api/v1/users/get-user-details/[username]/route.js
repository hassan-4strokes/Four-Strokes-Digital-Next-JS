import User from "@/models/user.model.js";
import databaseConnection from "@/database/database";
import { NextResponse } from "next/server";

databaseConnection();

export async function GET(request, { params }) {
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
  
      return NextResponse.json(
        {
          success: true,
          user,
        },
        {
          status: 200,
        }
      );
    } catch (error) {
      console.error("Some Error Occured While Fetching User Details", error);
      return NextResponse.json(
        {
          success: false,
          message: "User Details Fetching Failed",
        },
        {
          status: 500,
        }
      );
    }
  }
