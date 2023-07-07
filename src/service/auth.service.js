const BASE_URL = "http//:localhost:3000";
import { getToken, removeToken, setToken } from "./helpers";

export async function fetchUserData() {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export async function fetchProductsData() {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export async function fetchAuthData() {
    try {
      const response = await axios.get(`${BASE_URL}/auth`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

const axiosInstance = axios.create({ baseURL: BASE_URL });

const token = getToken();


if (token) {
	setToken(token);
}

export function login({ email, password }) {
	return axiosInstance
		.post(`${BASE_URL}/auth/login`, { email, password })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function register({ email, password, name, rut }) {
	return axiosInstance
		.post(`${BASE_URL}/auth/register`, { email, password, name, last_name })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function getMe() {
	return axiosInstance
		.get(`${BASE_URL}/auth/currentUser`)
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