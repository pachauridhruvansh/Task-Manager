"use client"

import React, { useState } from 'react'
import Signupsvg from "../assets/Signup.svg";
import Image from 'next/image';
import { toast } from 'react-toastify';
import { signupUser } from '../services/userservice';
import { useRouter } from 'next/navigation'
import { Island_Moments } from 'next/font/google';
import { Router } from 'next/router';
// import { Toast, ToastContainer } from 'react-toastify/dist/components';

const Signupclientpage = () => {

	const [isLoading, SetisLoading] = useState(false);
	const router=useRouter();

	const resetForm=()=>{
		setData({
		name: "",
		email: "",
		password: "",
		about: "",
		profileUrl: "https://play.google.com/store/apps/details?id=com.miniarkano.instaprofilepicture&hl=en_US&pli=1",
		});
		return;
	};


	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
		about: "",
		profileUrl: "https://play.google.com/store/apps/details?id=com.miniarkano.instaprofilepicture&hl=en_US&pli=1",
	})

	

	const DoSignup = async (event) => {
		event.preventDefault();
		console.log(event);
		console.log(data);
		SetisLoading(true);


		// data validation

		if (data.name.trim() === "" || data.name == null) {
			toast.warning("Name is required", {
				position: "top-center",
			});
			SetisLoading(false);
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
			toast.warning("Please provide a valid email address.", {
				position: "top-center",
			});
			SetisLoading(false);
			return;
		}


		if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])^.{8,}$/.test(data.password)) {
			toast.warning("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.", {
				position: "top-center",
			});
			SetisLoading(false);
			return;
		}

		//   form submit 

		try {
			const result = await signupUser(data);
			console.log(result);
			toast.success("user registered", {
				position: "top-center",
			});

			setData({
				name: "",
				email: "",
				password: "",
				about: "",
				profileUrl: "https://play.google.com/store/apps/details?id=com.miniarkano.instaprofilepicture&hl=en_US&pli=1",
			});
			router.push('/login');

		} catch (error) {
			console.log(error);
			toast.error("User not registered", {
				position: "top-center",
			});

		}

		setTimeout(() => {
			SetisLoading(false);
		}, 2000);
		
		// console.log("not runnung");
	};

	

	return (
		<div className='grid grid-cols-12 '>
			<div className='col-span-4 col-start-5 mt-4  '>
				<div className='mt-4  '>
					<div className="m-4 flex justify-center">
						<Image src={Signupsvg} alt='Signup image' style={{
							width: "40%"
						}}>

						</Image></div>
					<h1 className='text-center text-3xl '> Signup</h1>
					<form action='#!' onSubmit={DoSignup}>
						{/* User name  */}
						<div className='mt-3'>
							<label htmlFor=" user_name " className=" block text-sm font-medium mb-2 "> Name </label>
							<input type="text"
								className=" w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100  "
								placeholder='Type your text here '
								id='user_name'
								name='user_name'
								onChange={(event) => setData({ ...data, name: event.target.value })}
								value={data.name}
							/>
						</div>

						{/* Email  */}
						<div className='mt-3'>
							<label htmlFor=" user_email " className=" block text-sm font-medium mb-2 "> E-mail </label>
							<input type="E-mail"
								className=" w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100  "
								placeholder='Type your text here '
								id='user_email'
								name='user_email'
								onChange={(event) => setData({
									...data,
									email: event.target.value

								})}
								value={data.email}
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
								onChange={(event) => setData({
									...data,
									password: event.target.value
								})}
								value={data.password}
							/>
						</div>

						{/* About  */}
						<div className='mt-3'>
							<label htmlFor=" user_about " className="block text-sm font-medium mb-2 "> About </label>
							<textarea
								type="text"
								className=" w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100  "
								placeholder='Type your text here '
								id='user_about'
								rows={6}
								name='user_about'
								onChange={(event) => setData({
									...data,
									about: event.target.value
								})}
								value={data.about}
							>

							</textarea >
						</div>

						<div className="mt-4 text-center">
							<button className="px-2 py-2 bg-green-700 rounded-md hover:bg-green-500" type="submit" disabled={isLoading}>
								{isLoading ? 'Loading...' : 'Signup'}</button>
							<button onClick={resetForm} type="button" className="px-2 py-2 rounded-md bg-orange-700 hover:bg-orange-500 ms-3"
								>Reset</button>
						</div>

					</form>
					{/* {JSON.stringify(data)} */}

				</div>
			</div>

		</div>
	)
}

export default Signupclientpage