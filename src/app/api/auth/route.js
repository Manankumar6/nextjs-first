import { connectDb } from "@/app/_lib/db";
import { authenticateToken } from "@/app/middleware/auth";
import User from "@/app/model/UserModel";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    await connectDb();
    try {
      
     
        const formData = await req.json();
        const {action} = formData;
        const cookieStore = cookies();
        if (action === 'signup') {

            const { email, name, password } = formData;
            // Check if required fields are present
            if (!email || !name || !password) {
                return NextResponse.json({ message: "All fields are required" }, { status: 400 });
            }
            const user = await User.findOne({ email });
            if (user) {
                return NextResponse.json({ message: "User Already Exist" }, { status: 409 })
            }
            const newUser = new User({
                email: email,
                name: name,
                password: password
            })

            await newUser.save();
            return NextResponse.json({ message: "User created successfully!" }, { status: 200 });

        } else if (action === 'login') {
            const { email, password } = formData;

            // Check if required fields are present
            if (!email || !password) {
                return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
            }
            const user = await User.findOne({ email });
            if (!user) {
                return NextResponse.json({ message: "Invaild credentials" },{status:400})
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
            }
            const token = await  user.generateAuthToken();
           
            cookieStore.set('token', token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'Strict', // Set to 'None' if you need cross-site support
              path: '/',
              maxAge: 2592000 , // Cookie will expire in 1 hour
            });
            
            return NextResponse.json({ message: "Login successful!" }, { status: 200 });
        }else if(action == 'logout'){
           
            cookieStore.set('token', '', { // Clear the token cookie
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'Strict',
              path: '/',
              maxAge: 0, // Set to 0 to immediately expire the cookie
            });
          
            return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Invalid action" }, { status: 400 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal Server Error" })
    }

}

export async function GET(req){
    await connectDb();
    try {
        const {isValid,user,error} = await authenticateToken(req);
        
        
        if(!isValid){
            return NextResponse.json({message:error},{status:400});
            
        }
        return NextResponse.json({ message: "Authenticated", user },{status:200});
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" },{status:400});
    }
}

