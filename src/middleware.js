// import { NextResponse } from 'next/server'

import { NextResponse } from "next/server";


// // This function can be marked `async` if using `await` inside
export function middleware(request) {


	const authtoken = request.cookies.get("authtoken")?.value
	// console.log(authtoken);

	if (request.nextUrl.pathname == "/api/login" ||
		request.nextUrl.pathname === "/api/users") {
		return;
	}

	const usernotaccesspaths = request.nextUrl.pathname === "/login" || request.nextUrl.pathname == "/SignUp";

	if (usernotaccesspaths) {
		if (authtoken) {
			return NextResponse.redirect(new URL("/profile/user", request.url));
		}
	} else {
		if (!authtoken) {
			if (request.nextUrl.pathname.startsWith("/api")) {
				return NextResponse.json({
					message: "access denied",
					success: false,
				}, {
					status: 401
				});
			}
			return NextResponse.redirect(new URL("/login", request.url));
		} 
	}

	// console.log("middleware executed");
	//   return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [ '/addtask', '/login', '/SignUp', '/showtask', '/api/:path*', '/profile/:path*']
}