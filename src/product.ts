import axios, { AxiosInstance } from "axios";
import { API_ENDPOINTS, BASE_URLS } from "./config";

export interface Product {
    id: string;
    name: string;
    price: number;
}

export class TanqoryProduct {
    private client: AxiosInstance;

    constructor(jwtToken: string) {
        this.client = axios.create({
            baseURL: BASE_URLS.product,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`,
            },
        });
    }

    async getProducts(siteId: string, params?: object): Promise<Product[]> {
        try {
            const response = await this.client.get<Product[]>(API_ENDPOINTS.product.getProducts(siteId), { params });
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async getProduct(siteId: string, productId: string): Promise<Product[]> {
        try {
            const response = await this.client.get<Product[]>(API_ENDPOINTS.product.getProduct(siteId, productId));
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async addProduct(siteId: string, product: Product): Promise<Product[]> {
        try {
            const response = await this.client.post<Product[]>(API_ENDPOINTS.product.addProduct(siteId), product);
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async updateProduct(siteId: string, productId: string, product: Product): Promise<Product[]> {
        try {
            const response = await this.client.put<Product[]>(API_ENDPOINTS.product.updateProduct(siteId, productId), product);
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async removeProduct(siteId: string, productId: string): Promise<Product[]> {
        try {
            const response = await this.client.delete<Product[]>(API_ENDPOINTS.product.removeProduct(siteId, productId));
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }
}