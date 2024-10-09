"use server"
import { sendPasswordEmail } from "@/app/functions/sendEmail";
import ConnectDB from "@/config/db";
import UserModel from "@/schemas/user.schema";

import { NextRequest, NextResponse } from "next/server";

import jwt from 'jsonwebtoken';


export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json();
        await ConnectDB();
        await UserModel.create(data);
        await sendPasswordEmail({receiver: data.email, password: data.password});
        
        const token = jwt.sign(data, process.env.SECRET_KEY!, { expiresIn: '7d' });

        return NextResponse.json({ message: "Member Saved", token: token }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Member Cannot Saved" }, { status: 401 });
    }
}