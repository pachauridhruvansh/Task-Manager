import { getresponse } from "@/helper/getresponse";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {

	try {
		const { userid } = params;
		const tasksfound  = await Task.find({
			userid: userid

		})

		return NextResponse.json(tasksfound)
		

	} catch (error) {
		console.log(error);
		return getresponse("No user found ", false, 400);

	}


}