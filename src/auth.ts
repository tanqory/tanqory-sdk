import axios, { AxiosInstance } from "axios";
import { API_ENDPOINTS, BASE_URLS } from "./config";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export class TanqoryAuth {
  private client: AxiosInstance;

  constructor(jwtToken: string) {
    this.client = axios.create({
      baseURL: BASE_URLS.auth,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`,
      },
    });
  }

  async getProfile(): Promise<UserProfile> {
    try {
      const response = await this.client.get<UserProfile>(API_ENDPOINTS.auth.getProfile);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching profile:", error.response?.data || error.message);
      throw error;
    }
  }
}