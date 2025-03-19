import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        minLength: [3, "Name Should Have Atleast 3 Characters"]
    },

    username: {
        type: String,
        required: [true, "Please Enter Your Username"],
        minLength: [3, "Username Should Have Atleast 3 Characters"],
        unique: [true, "Username Already Exists"],
        lowercase: true,
        trim: true
    },

    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        validate: [validator.isEmail, "Please Enter A Valid Email"],
        minLength: [3, "Email Should Have Atleast 3 Characters"]
    },

    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password Should Have Atleast 8 Characters"],
        select: false
    },

    role: {
        type: String,
        enum: ["Admin", "Editor", "User"],
        required: [true, "Please Enter Your Role"]
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.models?.users || mongoose.model("users", userSchema);

export default User;