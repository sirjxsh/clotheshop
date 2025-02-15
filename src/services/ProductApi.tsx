import axios from "axios";
import { IProduct } from "./Interfaces";

const API_BASE_URL = 'https://fakestoreapi.com/'

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

const productApi = {
    getProducts: async (): Promise<IProduct[]> => {
        const response = await apiClient.get('products');
        return response.data;
    },
    getProductById: async (id: number): Promise<IProduct> => {
        const response = await apiClient.get(`products/${id}`);
        return response.data;
    },
    getProductsWithPagination: async (offset: number, limit: number): Promise<IProduct[]> => {
        const response = await apiClient.get(`products`);
        return response.data.slice(offset, offset + limit);
    },
    getProductsByCategory: async (category: string): Promise<IProduct[]> => {
        const response = await apiClient.get(`products/?categoryId=${category}`);
        return response.data;
    }
}

export default productApi;