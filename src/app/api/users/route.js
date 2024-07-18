import { connectDb } from "@/helper/db";
// import { getresponse } from "@/helper/getresponse";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

connectDb();

export async function GET(request) {
	let users = [];
	try {
		users = await User.find().select("-password");

	}
	catch (error) {
		console.log(error)
		return NextResponse.json({
			message: "failed to get users",
			success: false,
		});
	}

	return NextResponse.json(users);

}

export async function POST(request) {

	// get user detail  from request
	const { name, email, password, about, profileUrl } = await request.json();

	// create user object with user model
	const user = new User({
		name, email, password, about, profileUrl

	});

	try {
		// save object to database
		user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
		const createduser = await user.save();

		const response = NextResponse.json(user, {
			status: 201,
		});

		return response;
	}
	catch (error) {
		console.log(error);
		return NextResponse.json({
			message: "failed to create user",
			status: false,
		},{
			status:500,
				});
	}
	// const body = request.body
	// console.log(body)
	// console.log(request.method)
	// return NextResponse.json({
	// 	"message":"Post request"
	// });

}

// export function DELETE() {

// }

// export async function PUT(request) {
// 	const { name, email, password, about, profileUrl } = await request.json();
// 	try {
// 		const user = await User.findByIdAndUpdate(userId, {
// 			name, email, password, about, profileUrl
// 		}, { new: true }) // Return the new document after update
// 		if (!user) {
// 			return getresponse("user not found", false, 404)
// 		}
// 		return getresponse("user updated", true, 200);

// 	} catch (error) {
// 		console.log(error);
// 		return getresponse("user not updated", false, 500);

// 	};

// }