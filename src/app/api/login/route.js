// import { getresponse } from "@/helper/getresponse"
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
// import { connectDb } from "@/helper/db";
// connectDb();
// import { useEffect } from "react";


//   useEffect(() => {
// 	console.log(" this has started working again")
//     connectDb();
//   }, []);

export async function POST(request) {



	const { email, password } = await request.json()

	try {
		// 1.  or getting user
		const user = await User.findOne({
			email:email,
		});

		// console.log(user);
		if (user == null) {
			throw new Error("user not found ");
		}
		// 2. matching user password
		const matched = bcrypt.compareSync(password, user.password)
		if (!matched) {
			throw new Error("Password not matched");
		}
		// 		generate token
		const token = jwt.sign({
			_id: user._id,
			name: user.name
		},
			process.env.JWT_KEY
		);

		// create  next response cookie
		const response = NextResponse.json({
			message: "Login success",
			success: "true",
			user:user,
		});

		response.cookies.set("authtoken", token, {
			expiresIn: "1d",
			"httpOnly": true,
		});

		console.log(token);
		console.log(user);

		// return getresponse("user found", true, 200);
		// return NextResponse.json({
		// 	message: "success",
		// })

		return response;
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message,
				success: false,
			}, {
			status: 400
		}
		);

	}
}