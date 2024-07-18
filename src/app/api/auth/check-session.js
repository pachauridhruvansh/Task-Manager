import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  const authtoken = request.cookies.get("authtoken")?.value;

  if (!authtoken) {
    return NextResponse.json({ isLoggedIn: false });
  }

  try {
    const data = jwt.verify(authtoken, process.env.JWT_KEY);
    const user = await User.findById(data._id).select("-password");

    if (user) {
      return NextResponse.json({ isLoggedIn: true });
    } else {
      return NextResponse.json({ isLoggedIn: false });
    }
  } catch (error) {
    console.error("Error verifying token or fetching user:", error);
    return NextResponse.json({ isLoggedIn: false });
  }
}
