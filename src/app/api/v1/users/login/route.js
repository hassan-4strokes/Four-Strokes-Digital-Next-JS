import bcrypt from "bcrypt";
import User from '@/models/user.model.js';
import databaseConnection from "@/lib/databaseConnection"
import { NextResponse } from "next/server";

databaseConnection();

export async function POST (resquest) {

    try {

        
    const reqBody = await request.json();
    const { name, username, email, password, role } = reqBody;

    } catch (error) {

    }

}