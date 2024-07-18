"use client";
import { logouts } from '@/app/services/userservice';
import Usercontext from '@/context/userContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { Router } from 'next/router'; 
// console.log("hello")
import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';

const CustomNavbar = () => {

	const context = useContext(Usercontext);
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter()

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	  };

	async function dologout() {
		try {
			const result = await logouts();
			console.log(result);
			toast.success("logged out successfully ")
			context.setUser(undefined);
			router.push("/login");

		} catch (error) {
			console.log(error);
			toast.error("not able to log out");

		}


	}
// 	return (
// 		<nav className='bg-blue-500 flex justify-between px-4 py-3 h-12 items-center'>
// 			<div className='brand'>
// 				<h1 className='font-semibold text-xl'> <a href='#!'> WORK MANAGER </a> </h1>
// 			</div>
// 			<div>
// 				<ul className='flex space-x-5 '>
// 					{context.user && (
// 						<>
// 							<li> <Link href={"/"}>Home</Link></li>
// 							<li> <Link href='/addtask'>Add task</Link></li>
// 							<li> <Link href='/showtask'>Show task</Link></li>
// 						</>
// 					)
// 					}
// 				</ul>
// 			</div>
// 			<div><ul className='flex space-x-5 '>

// 				{!context.user && (
// 					<>
// 						<li> <Link href='/login'>Login</Link></li>
// 						<li> <Link href='/SignUp'>Signup </Link></li>
// 					</>
// 				)}

// 				{context.user && (
// 					<>
// 						<li> <Link href='#!'>{context.user.name}</Link></li>
// 						<li> <button onClick={dologout}>Logout </button></li>
// 					</>
// 				)}

// 			</ul></div>
// 		</nav>
// 	)
// }


return (
    <nav className="bg-blue-500 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="brand">
          <h1 className="font-semibold text-xl text-white">
            <Link href="#">WORK MANAGER</Link>
          </h1>
        </div>
        <div className="hidden md:flex md:space-x-5">
          {context.user && (
            <>
              <li className="list-none">
                <Link href="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link href="/addtask" className="text-white hover:text-gray-300">
                  Add task
                </Link>
              </li>
              <li className="list-none">
                <Link href="/showtask" className="text-white hover:text-gray-300">
                  Show task
                </Link>
              </li>
            </>
          )}
        </div>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-5 md:ml-auto md:items-center">
            {context.user && (
              <>
                <li className="md:hidden list-none">
                  <Link href="/" className="text-white hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li className="md:hidden list-none">
                  <Link href="/addtask" className="text-white hover:text-gray-300">
                    Add task
                  </Link>
                </li>
                <li className="md:hidden list-none">
                  <Link href="/showtask" className="text-white hover:text-gray-300">
                    Show task
                  </Link>
                </li>
                <li className="list-none">
                  <Link href="#" className="text-white hover:text-gray-300">
                    {context.user.name}
                  </Link>
                </li>
                <li className="list-none">
                  <button
                    onClick={dologout}
                    className="text-white hover:text-gray-300"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
            {!context.user && (
              <>
                <li className="list-none">
                  <Link href="/login" className="text-white hover:text-gray-300">
                    Login
                  </Link>
                </li>
                <li className="list-none">
                  <Link href="/SignUp" className="text-white hover:text-gray-300">
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;