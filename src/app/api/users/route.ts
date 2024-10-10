"use server"
import bcrypt from "bcrypt";
import { sendPasswordEmail, sendWelcomeEmail } from "@/app/functions/sendEmail";
import ConnectDB from "@/config/db";
import UserModel from "@/schemas/user.schema";

import { NextRequest, NextResponse } from "next/server";

import jwt from 'jsonwebtoken';
import { limit } from "@/middleware/rateLimiter";


export const POST = async (request: NextRequest) => {
    const ip = request.ip ?? request.headers.get('X-Forwarded-For') ?? 'unknown';
    const isRateLimited = limit(ip);
    if (isRateLimited) {
        return NextResponse.json({ message: "Rate Limit!" }, { status: 500 });
    }
    try {
        const data = await request.json();
        await ConnectDB();

        //Check Null Operations:
        if (await checkNull(request)) {
            return NextResponse.json({ message: "Null" }, { status: 401 });
        }

        // Check User:
        const user = await UserModel.findOne({ $or: [
            { email: data.email },
            { schoolNumber: data.schoolNumber }
        ] });

        if (user) {
            return NextResponse.json({ message: "Member Already Exists", token: user.token }, { status: 200 });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        const token = jwt.sign(data, process.env.SECRET_KEY!, { expiresIn: '7d' });
        
        await UserModel.create({ ...data, token: token, password: hashedPassword });
        
        await sendWelcomeEmail({ receiver : data.email, name: data.fullName });
        await sendPasswordEmail({receiver: data.email, password: data.password});
        
        return NextResponse.json({ message: "Member Saved", token: token }, { status: 201 });
    } catch {
        return NextResponse.json({ message: "Member Cannot Saved" }, { status: 401 });
    }
}

const checkNull = async (req: NextRequest) : Promise<boolean> => {
    try {
        const data = await req.json();
        if (data.studentNumber == null ||
            data.fullName == null ||
            data.phoneNumber == null ||
            data.email == null ||
            data.password == null || 
            data.password == null
        ) {
            return false;           
        }
        return true;
    } catch {
        return false;
    }
}