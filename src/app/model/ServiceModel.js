import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
        
    }

})

const Contact = mongoose.model.Contact|| new mongoose.model("Contact",ContactSchema)
export default Contact;