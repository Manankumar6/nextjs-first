import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true 
    },
    des:{
        type:String,
        required:true
    },
    img:{
        type:String,
        
    }

})

const Service = mongoose.model.Service|| new mongoose.model("Service",ServiceSchema)
export default Service;