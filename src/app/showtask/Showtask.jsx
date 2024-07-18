// "use client"
// import React, { useContext, useEffect, useState } from 'react'
// import { getusertask } from '../services/taskservice'
// import { toast } from 'react-toastify';
// import Usercontext from '@/context/userContext';
// import Task from "./Task";

// const Showtask = () => {

// 	const [tasks, setTasks] = useState([]);
// 	const context = useContext(Usercontext);
// 	// console.log(context.user);

// 	async function loadtask(userId) {

// 		try {
// 			const tasks = await getusertask(userId)
// 			setTasks(...tasks)
// 			console.log("your have done this ")
// 			console.log(tasks.length)
// 		} catch (error) {
// 			console.log(error);
// 			toast.error("error in loading task")

// 		}
// 	}

// 	useEffect(() => {
// 		if (context.user) {
// 			loadtask(context.user._id);
// 		}

// 	},
// 		[context.user]);

// 	return (
// 		<div className='grid grid-cols-12'>
// 			<div className='col-span-6 col-'>
// 				<h1 className='text-3xl text-center'>Your Task ( {tasks.length} )</h1>

// 				{tasks && tasks.map((task)=>(
// 					<Task
// 					task={task}
// 					key={task._id}
// 					/>
// 				))}

// 			</div>
// 		</div>
// 	);

// }

// export default Showtask;

"use client";
import UserContext from "@/context/userContext";
import { deletetask, getusertask } from '../services/taskservice'
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const ShowTasks = () => {
	const [tasks, setTasks] = useState([]);
	const context = useContext(UserContext);
	async function loadTasks(userId) {
		try {
			const tasks = await getusertask(userId);
			setTasks([...tasks].reverse());
			console.log(tasks);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (context.user) {
			loadTasks(context.user._id);
		}
	}, [context.user]);

	//   async function deleteTaskParent(tasksId) {
	//     try {
	//       const result = await deleteTask(tasksId);
	//       console.log(result);
	//       const newTasks = tasks.filter((item) => item._id != tasksId);
	//       setTasks(newTasks);
	//       toast.success("Your task is deleted ");
	//     } catch (error) {
	//       console.log(error);
	//       toast.error("Error in deleting task !!");
	//     }
	//   }

	async function deleteTaskParent(taskid) {
		try {
			const result = await deletetask(taskid)
			console.log(result)
			const newtasks = tasks.filter(item => item._id != taskid)
			setTasks(newtasks);
			toast.success("Your task deleted ")

		} catch (error) {
			console.log(error);

		}
	}

	return (
		<div className="grid grid-cols-12 mt-3">
			<div className="col-span-6 col-start-4 ">
			{/* <div className="col-span-12 sm:col-span-10 md:col-span-8 mx-auto"> */}
				<h1 className="text-3xl mb-3 text-center">Your tasks ( {tasks.length} )</h1>
				{tasks.map((task) => (
					<Task
						task={task}
						key={task._id}
						deleteTaskParent={deleteTaskParent}
					/>
				))}
			</div>
		</div>
	);
};

export default ShowTasks;
