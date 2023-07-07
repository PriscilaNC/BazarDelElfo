import axios from "axios";
import { getToken, removeToken, setToken } from "./helpers.js";

const BASE_URL = "http://localhost:3000/auth";

const axiosInstance = axios.create({ baseURL: BASE_URL });

const token = getToken();


if (token) {
	setToken(token);
}

export function login({ email, password }) {
	return axiosInstance
		.post(`${BASE_URL}/login`, { email, password })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function register({ email, password, name, last_name }) {
	return axiosInstance
		.post(`${BASE_URL}/register`, { email, password, name, last_name })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function getMe() {
	return axiosInstance
		.get(`${BASE_URL}/currentUser`)
		.then((response) => response.data)
		.catch((error) => {
			console.log(error);
			if (error.response.status === 404) {
				removeToken();
			}
			return {
				error: true,
				name: error.response.data?.error?.name || "Error",
				message: error.response.data?.error || "Error",
			};
		});
}

export { axiosInstance };