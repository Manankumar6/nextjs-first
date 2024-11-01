import { connectDb } from "@/app/_lib/db"; // Import your database connection function
import Contact from "@/app/model/ServiceModel"; // Import your Contact model
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Connect to the database
    await connectDb();

    // Parse the JSON body from the request
    const body = await req.json(); // Assuming this works without issues
   
    // Destructure the required fields
    const { name, email, phone, message, plan, siteType } = body;

    // Log the extracted values for debugging
    
    const newContact = new Contact({ name, email,phone, plan, siteType, message });

    // Save the new contact to the database
    await newContact.save();

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // or 465 for SSL/TLS
      secure: false, // true for port 465, false for port 587
      auth: {
        user: process.env.EMAIL_USER, // Your email address, stored securely
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Prepare email options
    const mailOptions = {
      from: email, // User's email as the "from" address
      to: "contact@techcanva.in", // Your business email
      subject: "New Inquiry from TechCanva",
      text: `
        You have received a new contact form submission.

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Plan: ${plan}
        SiteType: ${siteType}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response(JSON.stringify({ message: "Contact created and email sent successfully!" }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating contact or sending email:", error);

    // Return an error response
    return new Response(JSON.stringify({ message: "Failed to create contact or send email." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
