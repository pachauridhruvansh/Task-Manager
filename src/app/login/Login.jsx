"use client"

import { getresponse } from '@/helper/getresponse'
import { NextResponse } from 'next/server'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { login } from '../services/userservice'
import { useRouter } from 'next/navigation'
import Usercontext from '@/context/userContext'

const Login = () => {

	const router = useRouter()
	const context = useContext(Usercontext)

	const resetForm = () => {
		setLogs({
			email: "",
			password: "",

		})
	}


	const [logs, setLogs] = useState({
		email: "",
		password: "",
	});


	const Dologin = async (event) => {

		event.preventDefault();
		console.log(event);
		console.log(logs);

		// data validation 
		if (logs.email.trim() === "" || logs.password.trim() === "") {
			toast.error("invalid entry", {
				position: "top-center"
			});
			return;
		}

		try {

			const result = await login(logs);
			console.log(result);
			toast.success("logged in successfully")
			context.setUser(result.user);
			// router.push("/profile/user");
			router.push("/showtask");

		} catch (error) {
			toast.error(error.response.data.message, {
				position: "top-center"
			});
			console.log(error);
			// return getresponse("login failed", false, 200)
		}


	}



	return (
		<div className='grid grid-cols-12 '>
			<div className='col-span-4 col-start-5 mt-4  '>
				<div className='mt-4  '>
					<h1 className='text-center text-3xl '> Login</h1>

					<form action='#!' onSubmit={Dologin}>
						{/* User name  */}
						<div className='mt-3'>
							<label htmlFor=" user_email " className=" block text-sm font-medium mb-2 "> E-mail </label>
							<input type="E-mail"
								className=" w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100  "
								placeholder='Type your text here '
								id='user_email'
								name='user_email'
								onChange={(event) => setLogs({
									...logs,
									email: event.target.value
								}
								)}
								value={logs.email}
							/>
						</div>

						{/* password   */}
						<div className='mt-3'>
							<label htmlFor=" user_password " className="mt-3 block text-sm font-medium mb-2 "> Password </label>
							<input type="password"
								className=" w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100  "
								placeholder='Type your text here '
								id='user_password'
								name='user_password'
								onChange={(event) => setLogs({
									...logs,
									password: event.target.value,
								})}
								value={logs.password}
							/>
						</div>

						<div className="mt-4 text-center">
							<button className="px-2 py-2 bg-green-700 rounded-md hover:bg-green-500" type="submit" >Login </button>
							<button onClick={resetForm} type="button" className="px-2 py-2 rounded-md bg-orange-700 hover:bg-orange-500 ms-3"
							>Reset</button>
						</div>


						{/* {JSON.stringify(logs)} */}
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login