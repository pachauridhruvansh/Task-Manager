import { Task } from "@/models/task"
import { NextResponse } from "next/server"
// import { connectDb } from "@/helper/db"
import { getresponse } from "@/helper/getresponse";
import  jwt  from "jsonwebtoken";

// connectDb();

export async function GET(request) {

    try {
        const tasks = await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return getresponse("error in getting task", false, 400);

    }

}



export async function PUT(request) {
    const { title, content, userid } = await request.json()

    try {

        const task = new Task({
            title,
            content,
            userid,
        });

        const createdtask = await task.save();

        return NextResponse.json(createdtask, {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return getresponse("failed to create task", false, 400);
    }
}

export async function POST(request) {
    const { title, content, userid,status } = await request.json()
    const authtoken = request.cookies.get("authtoken")?.value;



    const data = jwt.verify(authtoken, process.env.JWT_KEY)

    console.log(data._id);

    try {

        const task = new Task({
            title,
            content,
            userid: data._id,
            status,
        });

        const createdtask = await task.save();

        return NextResponse.json(createdtask, {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return getresponse("failed to create task", false, 400);
    }
}




