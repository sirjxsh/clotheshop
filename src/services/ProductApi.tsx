import axios from "axios";

const API_BASE_URL = 'https://api.escuelajs.co/api/v1/'

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: ICategory;
    images: string[];
}

export interface ICategory {
    id: number;
    name: string;
    image: string;
}

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
        const response = await apiClient.get(`products/?offset=${offset}&limit=${limit}`);
        return response.data;
    },
    getProductsByTitle: async (title: string): Promise<IProduct[]> => {
        const response = await apiClient.get(`products/?title=${title}`);
        return response.data;
    },
    getProductsByCategory: async (categoryId: number): Promise<IProduct[]> => {
        const response = await apiClient.get(`products/?categoryId=${categoryId}`);
        return response.data;
    }
}

export default productApi;