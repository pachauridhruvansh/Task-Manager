import { getresponse } from "@/helper/getresponse";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
connectDb();

export async function GET(request, { params }) {
	const { taskid } = params;

	try {
		const task = await Task.findById(taskid);
		return NextResponse.json(task);
	} catch (error) {
		console.log(error);
		return getresponse("failed to get task", false, 400);

	}


}

export async function PUT(request, { params }) {

	try {
		const { taskid } = params;
		// const task = await Task.findByIdAndUpdate(taskid,request.body);
		// // return NextResponse.json(task);
		// if(!task) return getresponse('No such task exists', false , 404);
		// else return getresponse('Task updated successfully!', true ,200).json(task);

		const { title, content, status } = await request.json();
		let task = await Task.findById(taskid);
		(task.title = title),
			(task.content = content),
			(task.status = status);

		const updatedtask = await task.save();

		return NextResponse.json(updatedtask);

	} catch (error) {
		console.log(error);
		return getresponse('Error in updating the task', false, 500);


	}
}


export async function DELETE(request, { params }) {
	

	try {

		const { taskid } = params;
		console.log(taskid);
		await Task.deleteOne({
			_id:taskid
		});
		return getresponse("task deleted",true,200);

	} catch (error) {
		console.log(error);
		return getresponse("task not deleted",false,500);
	}
}