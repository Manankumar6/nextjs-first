import { connectDb } from "@/app/_lib/db"; // Import your database connection function
import Contact from "@/app/model/ServiceModel"; // Import your Contact model

export async function POST(req) {
  try {
    // Connect to the database
    await connectDb();

    // Parse the JSON body from the request
    const body = await req.json();

    // Create a new contact entry
    const newContact = new Contact(body);

    // Save the new contact to the database
    await newContact.save();

    // Return a success response
    return new Response(JSON.stringify({ message: "Contact created successfully!" }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating contact:", error);

    // Return an error response
    return new Response(JSON.stringify({ message: "Failed to create contact." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
