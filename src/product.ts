import axios, { AxiosInstance } from "axios";
import { API_ENDPOINTS, BASE_URLS, Params } from "./config";

export interface Product {
    _id: string;
    [key: string]: string | number | Array<string | number | object> | object;
}

export interface ProductList { 
    items: Product[], 
    paging: { 
        next: string | null, 
        previous: string | null 
    } 
}

export interface Collection {
    _id: string;
    [key: string]: string | number | Array<string | number | object> | object;
}

export interface CollectionList { 
    items: Collection[], 
    paging: { 
        next: string | null, 
        previous: string | null 
    } 
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

    async getProducts(siteId: string, params?: Params): Promise<ProductList> {
        try {
            const response = await this.client.get<ProductList>(API_ENDPOINTS.product.getProducts(siteId), { params });
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async getProduct(siteId: string, productId: string): Promise<Product> {
        try {
            const response = await this.client.get<Product>(API_ENDPOINTS.product.getProduct(siteId, productId));
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async addProduct(siteId: string, product: Product): Promise<Product> {
        try {
            const response = await this.client.post<Product>(API_ENDPOINTS.product.addProduct(siteId), product);
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async updateProduct(siteId: string, productId: string, product: Product): Promise<Product> {
        try {
            const response = await this.client.put<Product>(API_ENDPOINTS.product.updateProduct(siteId, productId), product);
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async removeProduct(siteId: string, productId: string): Promise<Product> {
        try {
            const response = await this.client.delete<Product>(API_ENDPOINTS.product.removeProduct(siteId, productId));
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async getCollections(siteId: string, params?: object): Promise<CollectionList> {
        try {
            const response = await this.client.get<CollectionList>(API_ENDPOINTS.product.getCollections(siteId), { params });
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }

    async getCollection(siteId: string, collectionId: string): Promise<Collection> {
        try {
            const response = await this.client.get<Collection>(API_ENDPOINTS.product.getCollection(siteId, collectionId));
            return response.data;
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            throw error;
        }
    }
}