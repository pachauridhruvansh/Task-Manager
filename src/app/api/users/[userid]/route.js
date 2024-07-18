import { NextResponse } from "next/server";
import { User } from "@/models/user";
// import { connectDb } from "@/helper/db";

// connectDb();

export async function GET(request, { params }) {
	const { userid } = params;
	try {
		const user = await User.findById(userid).select("-password");
		if (!user) {
			return NextResponse.json({
				message: " user not found",
				success: false,
			});
		}
		return NextResponse.json(user);
	}
	catch (error) {
		console.log(error);
		return NextResponse.json({
			message: "failed to fetch user ",
			success: false,
		});

	}
	// const user = await User.findById(userid);
	// return NextResponse.json(user);

}

export async function DELETE(request, { params }) {
	const { userid } = params;
	try {
		await User.deleteOne({
			_id: userid,
		});
		return NextResponse.json({
			message: " user deleted ",
			success: true,
		});
	}
	catch (error) {
		console.log(error)
		return NextResponse.json({
			message: " user not deleted !!",
			success: false,
		});

	}
}


export async function PUT(request, { params }) {
	const { userid } = params;
	const { name, password, profileUrl, about } = await request.json();
	try {
		const user = await User.findById(userid)
		user.name = name;
		user.password = password;
		user.profileUrl = profileUrl;
		user.about = about;
		const updatedUser = await user.save();
		return NextResponse.json(updatedUser);
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			message: " user not updated!!",
			success: false,
		});
	}
}


// export async function DELETE(request, { params }) {
//     const { userid } = params;
//     let retryCount = 0;
//     const maxRetries = 3;
//     const retryInterval = 1000; // 1 second

//     while (retryCount < maxRetries) {
//         try {
//             await User.deleteOne({
//                 _id: userid,
//             });
//             return NextResponse.json({
//                 message: "user deleted",
//                 success: true,
//             });
//         } catch (error) {
//             console.log(error);
//             retryCount++;
//             await new Promise(resolve => setTimeout(resolve, retryInterval));
//         }
//     }

//     return NextResponse.json({
//         message: "user not deleted",
//         success: false,
//     });
// }
