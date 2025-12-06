import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true,
        trim: true,
    },
     rating: {
    type: Number,
    required: true,
    min: 1, // minimum 1 star
    max: 5, // maximum 5 stars
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