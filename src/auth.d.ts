import { AxiosInstance } from "axios";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export declare class TanqoryAuth {
  /**
   * Axios instance used for HTTP requests.
   */
  private client: AxiosInstance;

  /**
   * Creates a new instance of TanqoryAuth.
   * @param jwtToken The JWT token used for authorization.
   */
  constructor(jwtToken: string);

  /**
   * Fetches the user's profile.
   * @returns A Promise that resolves to the user's profile.
   * @throws An error if the profile cannot be fetched.
   */
  getProfile(): Promise<UserProfile>;
}