export interface UserProfile {
    id: string;
    name: string;
    email: string;
}
export declare class TanqoryAuth {
    private client;
    constructor(jwtToken: string);
    getProfile(): Promise<UserProfile>;
}
