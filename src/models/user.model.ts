import { Date } from "mongoose";
import { ObjectId } from "mongoose";


export enum UserRole {
    MEMBER = "MEMBER",
    TEAM_MEMBER = "TEAM_MEMBER",
    TEAM_LEADER = "TEAM_LEADER",
    BOARD_MEMBER = "BOARD_MEMBER",
    BOARD_HEAD = "BOARD_HEAD"
}
export type User = {
    _id: ObjectId,
    schoolNumber: string,
    fullName: string,
    phoneNumber: string,
    email: string,
    password: string,
    department: string,
    
    role: UserRole,
    isSpecial: boolean,

    createdAt: Date;
    updatedAt: Date;
}