import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true, 
    },
    verifyOtp:{
        type:String,
        default:''
    },
    verifyOtpExpireAt:{
        type:Number,
        default:0
    },
    isAccountVerified:{
        type:Boolean,
        default:false
    },
    resetOtp:{
        type:String,
        default:''
    }, /// otp used to reset the passowrd
    resetOtpExpireAt:{
        type:Number,
        default:0
    }
})
const userModel = mongoose.models.user || mongoose.model('user',userSchema) // purpose of this line is  when schema code  is run it is not created again and again it check when it is available then it only use the model and if we dont write this code then it will created again and again
export default userModel;