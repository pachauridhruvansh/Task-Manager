import Usercontext from '@/context/userContext'
import React, { useContext } from 'react'
import { RxCross1 } from "react-icons/rx";

const Task = ({ task, deleteTaskParent }) => {
	const { user } = useContext(Usercontext)
	function deletetask(taskid) {
		deleteTaskParent(taskid)
	}

	return (
		<div className={` shadow-lg mb-2 rounded-md ${task.status == "completed" ? "bg-green-800" : "bg-gray-700"}`}>
			<div className='p-5'>
				<div className='flex justify-between'>
					<h1 className='text-2xl font-bold'>{task.title}</h1>
					<span onClick={() => { deletetask(task._id); }} 
					className="shadow-lg hover:bg-red-500 bg-gray-950 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer " >
						<RxCross1 />
					</span>
				</div>

				<p>{task.content}</p>
				<div className='flex justify-between mt-2'>
					<p className=''>Status :<span className='font-bold'> {task.status}</span> </p>
					<p className=''>Author :<span className='font-bold'> {user?.name}</span> </p>

				</div>

			</div>
		</div>
	)
}

export default Task