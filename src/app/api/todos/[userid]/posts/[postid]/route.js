import { NextResponse } from "next/server";

export function GET (request,{params}){

	const{userid, postid}=params;
	console.log(" user id " , userid)
	console.log(" post id " , postid)
	return NextResponse.json(params);
}