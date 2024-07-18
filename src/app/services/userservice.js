import { httpAxios } from "@/helper/httpHelper";

export async function signupUser(user) {

	const result = await httpAxios.post("/api/users", user).then((response) => response.data);
	return result;
}


export async function login(logs) {

	const result = await httpAxios.post("/api/login", logs).then((response) => response.data);
	return result;
}

export async function currentUser() {

	const data = await httpAxios.get("/api/current").then((response) => response.data)
	return data;
}

export async function logouts() {
	const data = await httpAxios.post("/api/logout").then((response) => response);
	return data;
}  