import axios, { AxiosInstance } from "axios";
import { API_ENDPOINTS, BASE_URLS } from "./config";

export class TanqoryForm {
    private client: AxiosInstance;

    constructor(jwtToken: string) {
        this.client = axios.create({
            baseURL: BASE_URLS.form,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`,
            },
        });
    }

    async getSchema(formId: string): Promise<any> {
        try {
            const response = await this.client.get(API_ENDPOINTS.form.getSchema(formId));
            return response.data;
        } catch (error: any) {
            console.error("Error submitting form:", error.response?.data || error.message);
            throw error;
        }
    }

    async getDocs(siteId: string, formId: string, params?: object): Promise<any> {
        try {
            const response = await this.client.get(API_ENDPOINTS.form.getDocs(siteId, formId), { params });
            return response.data;
        } catch (error: any) {
            console.error("Error submitting form:", error.response?.data || error.message);
            throw error;
        }
    }

    async getDoc(siteId: string, formId: string, dataId: string): Promise<any> {
        try {
            const response = await this.client.get(API_ENDPOINTS.form.getDoc(siteId, formId, dataId));
            return response.data;
        } catch (error: any) {
            console.error("Error submitting form:", error.response?.data || error.message);
            throw error;
        }
    }

    async addDoc(siteId: string, formId: string, data: any): Promise<any> {
        try {
            const response = await this.client.post(API_ENDPOINTS.form.addDoc(siteId, formId), data);
            return response.data;
        } catch (error: any) {
            console.error("Error submitting form:", error.response?.data || error.message);
            throw error;
        }
    }

    async updateDoc(siteId: string, formId: string, dataId: string, data: any): Promise<any> {
        try {
            const response = await this.client.put(API_ENDPOINTS.form.updateDoc(siteId, formId, dataId), data);
            return response.data;
        } catch (error: any) {
            console.error("Error submitting form:", error.response?.data || error.message);
            throw error;
        }
    }

    async deleteDoc(siteId: string, formId: string, dataId: string): Promise<any> {
        try {
            const response = await this.client.delete(API_ENDPOINTS.form.deleteDoc(siteId, formId, dataId));
            return response.data;
        } catch (error: any) {
            console.error("Error submitting form:", error.response?.data || error.message);
            throw error;
        }
    }
}