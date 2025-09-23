import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

{
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: true, 
        select: false, // Exclude password from query results by default
        // Password format validation is handled in the controller before hashing
    },
    description:{
        type: String,
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        required: true,
    },
    profileURL:{
        type: String,
        default: '',
    }
},{
    timestamps: true,
}

);

export default mongoose.model('User', UserSchema);