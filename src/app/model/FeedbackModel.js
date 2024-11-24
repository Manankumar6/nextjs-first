import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    feedback: {
        type: String,
        required: true,
        trim: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

})


const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);
export default Feedback;