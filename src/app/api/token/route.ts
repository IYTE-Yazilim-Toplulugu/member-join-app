import ConnectDB from "@/config/db";
import OutlierModel from "@/schemas/outlier.schema";
import UserModel from "@/schemas/user.schema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request : NextRequest) => {
    try {
        const { token } = await request.json();
        
        await ConnectDB();
        const user = await UserModel.findOne({ token: token });
        
        if(user) {
            return NextResponse.json({ message: "Member Found", user: user }, { status: 200 });
        }
        else {
            const outlier = await OutlierModel.findOne({ token: token });
            if (outlier) {
                return NextResponse.json({ message: "Outlier Found", outlier: outlier }, { status: 201 });
            }
            return NextResponse.json({ message: "Member Cannot Found" }, { status: 404 });    
        }
    } catch {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}