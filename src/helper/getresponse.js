import { NextResponse } from "next/server"


export const getresponse = (message, successstate, statuscode) => {
	return NextResponse.json({
		message:message,
		status:statuscode,
		},
		{
			success:successstate
		}
	);
};
  
  

// export default getresponse