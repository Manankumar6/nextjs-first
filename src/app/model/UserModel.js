import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Name is required'],
    },
    email:{
        type:String,
        required: [true, 'Email is required'],
    },
    password:{
        type:String,
        required: [true, 'Password is required'], 
    }
},{timestamps:true})

UserSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password,10);
        next();
    } catch (error) {
        next(error);
    }

})
// Compare password 

UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.generateAuthToken = async function () {
    console.log(process.env.JWT_SECRET, "jwt secret key ")
    const token =   jwt.sign({ id: this._id, email: this.email,name:this.name }, process.env.JWT_SECRET, { expiresIn: '30d' });
    return token;
};



// Check if the 'User' model exists before defining it
const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;