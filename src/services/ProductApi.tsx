import axios from "axios";
import { IProduct } from "./Interfaces";
import * as productsJSON from '../assets/products.json';

const API_BASE_URL = 'https://fakestoreapi.com/'
const TIMEOUT = 2000;

console.log(import.meta.env.NODE_ENV)

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: TIMEOUT
});

const productApi = {
    getProducts: async (): Promise<IProduct[]> => {
        try {
            console.log('Fetching products from API...');
            const response = await apiClient.get('products');
            return response.data;
        } catch (error) {
            console.log('Error fetching products from API, loading from local JSON:');
            const products = Array.isArray((productsJSON as any).default) ? (productsJSON as any).default : productsJSON;
            return products as IProduct[];
        }
    },
    getProductById: async (id: number): Promise<IProduct> => {
        try {
            console.log(`Fetching product with ID ${id} from API...`);
            const response = await apiClient.get(`products/${id}`);
            return response.data;
        } catch (error) {
            console.log(`Error fetching product with ID ${id} from API, loading from local JSON:`, error.message);
            const products = Array.isArray((productsJSON as any).default) ? (productsJSON as any).default : productsJSON;
            const product = products.find(product => product.id === id);
            if (!product) {
                throw new Error(`Product with ID ${id} not found in local JSON`);
            }
            return product;
        }
    },
    getProductsWithPagination: async (offset: number, limit: number): Promise<IProduct[]> => {
        try {
            console.log('Fetching products with pagination from API...');
            const response = await apiClient.get('products');
            const data = Array.isArray(response.data) ? response.data : [];
            return data.slice(offset, offset + limit);
        } catch (error) {
            console.error('Error fetching products with pagination from API, loading from local JSON:', error.message);
            const products = Array.isArray((productsJSON as any).default) ? (productsJSON as any).default : productsJSON;
            return products.slice(offset, offset + limit);
        }
    }
}

export default productApi;