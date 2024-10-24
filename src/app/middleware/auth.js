// middleware/authenticateToken.js
import jwt from 'jsonwebtoken';

export const authenticateToken = async (req) => {
  // Extract the token from the request's cookies
  const token = req.cookies.get('token')?.value; // Access the token from Next.js cookies
 

  if (!token) {
    return { isValid: false, error: "No token provided, authorization denied." };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { isValid: true, user: decoded }; // Return user info if token is valid
  } catch (error) {
    return { isValid: false, error: "Token is not valid" };
  }
};
