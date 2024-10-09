import { UserRole } from "@/models/user.model";
import mongoose, { Model, Schema } from "mongoose";

const userSchema = new Schema({
    schoolNumber: {type: String, required: true},
    fullName: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: false},
    department: {type: String, required: true},

    role: {type: String, required: true, default: UserRole.MEMBER},
    isSpecial: {type: Boolean, required: true, default: false}

}, { timestamps: true });


let UserModel: Model<any, unknown, unknown, unknown, any, any>;
try {
    UserModel = mongoose.model("users");
} catch {
    UserModel = mongoose.model("users", userSchema);
}

export default UserModel;