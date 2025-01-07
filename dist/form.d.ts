import { Params } from "./config";
export declare class TanqoryForm {
    private client;
    constructor(jwtToken: string);
    getSchema(formId: string): Promise<any>;
    getDocs(siteId: string, formId: string, params?: Params): Promise<any>;
    getDoc(siteId: string, formId: string, dataId: string): Promise<any>;
    addDoc(siteId: string, formId: string, data: any): Promise<any>;
    updateDoc(siteId: string, formId: string, dataId: string, data: any): Promise<any>;
    deleteDoc(siteId: string, formId: string, dataId: string): Promise<any>;
}
