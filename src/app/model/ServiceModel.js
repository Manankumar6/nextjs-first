import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    plan:{
        type:String,
        required:true,
    },
    siteType:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
        
    }

})


const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
export default Contact;