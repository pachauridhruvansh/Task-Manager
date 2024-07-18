import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {

	const authtoken = request.cookies.get("authtoken")?.value;
	console.log(authtoken);


	const data = jwt.verify(authtoken, process.env.JWT_KEY)

	console.log(data);

	const user = await User.findById(data._id).select("-password");

	return NextResponse.json(user);

}