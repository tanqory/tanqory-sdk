export declare const BASE_URLS: {
    auth: string;
    product: string;
    form: string;
};
export declare const API_ENDPOINTS: {
    auth: {
        getProfile: string;
        login: string;
        logout: string;
    };
    product: {
        getProducts: (siteId: string) => string;
        getProduct: (siteId: string, productId: string) => string;
        addProduct: (siteId: string) => string;
        updateProduct: (siteId: string, productId: string) => string;
        removeProduct: (siteId: string, productId: string) => string;
        getCollections: (siteId: string) => string;
        getCollection: (siteId: string, collectionId: string) => string;
    };
    form: {
        getSchema: (formId: string) => string;
        getDocs: (siteId: string, formId: string) => string;
        getDoc: (siteId: string, formId: string, dataId: string) => string;
        addDoc: (siteId: string, formId: string) => string;
        updateDoc: (siteId: string, formId: string, dataId: string) => string;
        deleteDoc: (siteId: string, formId: string, dataId: string) => string;
    };
};
export type Params = {
    ids?: string;
    limit?: string;
    next?: string;
    sort?: string;
    order?: string;
};
