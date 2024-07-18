"use client"
import React, { useEffect, useState } from 'react'
import Usercontext from './userContext'
import { currentUser } from '@/app/services/userservice';
import { toast } from 'react-toastify'

const UserProvider = ({ children }) => {

	const [user, setUser] = useState(undefined)



	useEffect(() => {
		const fetchData = async () => {
			try {
				const loggeduser = await currentUser();
				console.log(loggeduser);
				setUser({ ...loggeduser });

			} catch (error) {
				console.log(error);
				// toast.error("error in loading current user");
				setUser(undefined);

			}
		};

		fetchData();
	}, []);


	return (
		<Usercontext.Provider value={{ user, setUser }} >{children}</Usercontext.Provider>
	);



};

export default UserProvider;