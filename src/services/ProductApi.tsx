import axios from "axios";
import { IProduct } from "./Interfaces";

const API_BASE_URL = 'https://fakestoreapi.com/'
const LOCAL_BASE_URL = '../assets/products.json'
const MODE = import.meta.env.NODE_ENV ?? 'api'

const apiClient = axios.create({
    baseURL: import.meta.env.NODE_ENV == 'local' ? LOCAL_BASE_URL : API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

const productApi = {
    getProducts: async (): Promise<IProduct[]> => {
            return (await apiClient.get('products')).data;

    },
    getProductById: async (id: number): Promise<IProduct> => {
        if (MODE == 'local') {
            return (await apiClient.get('')).data.find((product: IProduct) => product.id === id);
        }
        return (await apiClient.get(`products/${id}`)).data;
    },
    getProductsWithPagination: async (offset: number, limit: number): Promise<IProduct[]> => {
        let response
        if (MODE == 'local') {
            response = await apiClient.get('');
        }
        response = await apiClient.get('products');
        return response.data.slice(offset, offset + limit);
    }
}

export default productApi;