import axios from "axios";

const BASE_URL = "http://localhost:3000/products";


const axiosInstance = axios.create({ baseURL: BASE_URL });

export async function fetchProductsData() {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export async function createProduct(product) {
    try {
      return await axios.post(`${BASE_URL}/products`, product);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

export { axiosInstance };