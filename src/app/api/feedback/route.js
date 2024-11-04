import { connectDb } from "@/app/_lib/db"; // Import your database connection function
import Feedback from "@/app/model/FeedbackModel"; // Import your Feedback model

// POST /api/feedback - Submit feedback
export async function POST(req) {
  try {
    // Connect to the database
    await connectDb();

    // Parse the JSON body from the request
    const body = await req.json();
    const { name, email, feedback } = body;

    // Validate required fields
    if (!name || !email || !feedback) {
      return new Response(JSON.stringify({ message: "All fields are required." }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Create a new feedback entry
    const newFeedback = new Feedback({ name, email, feedback });

    // Save to database
    await newFeedback.save();

    // Return a success response
    return new Response(JSON.stringify({ message: "Feedback submitted successfully." }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error saving feedback:", error);

    // Return an error response
    return new Response(JSON.stringify({ message: "An error occurred while submitting feedback." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// GET /api/feedback - Retrieve all feedback
export async function GET() {
  try {
    // Connect to the database
    await connectDb();

    // Fetch all feedback entries
    const feedbacks = await Feedback.find({});

    // Return the feedbacks as JSON
    return new Response(JSON.stringify(feedbacks), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error retrieving feedback:", error);

    // Return an error response
    return new Response(JSON.stringify({ message: "An error occurred while retrieving feedback." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
