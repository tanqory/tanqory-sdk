export const BASE_URLS = {
    auth: "https://api-auth.tanqory.com/api/v1",
    product: "https://api-products-staging.tanqory.com/api/v1",
    form: "https://api-form.tanqory.com/api/v1",
};

export const API_ENDPOINTS = {
    auth: {
        getProfile: "/auth/user/profile",
        login: "/auth/login",
        logout: "/auth/logout",
    },
    product: {
        // Products
        getProducts: (siteId: string) => `/product-management/${siteId}/products`,
        getProduct: (siteId: string, productId: string) => `/product-management/${siteId}/products/${productId}`,
        addProduct: (siteId: string) => `/product-management/${siteId}/products`,
        updateProduct: (siteId: string, productId: string) => `/product-management/${siteId}/products/${productId}`,
        removeProduct: (siteId: string, productId: string) => `/product-management/${siteId}/products/${productId}`,

        // Collections
        getCollections: (siteId: string) => `/product-management/${siteId}/collections`,
        getCollection: (siteId: string, collectionId: string) => `/product-management/${siteId}/collections/${collectionId}`,
    },
    form: {
        getSchema: (formId: string) => `/forms/renders/form/${formId}`,
        getDocs: (siteId: string, formId: string) => `/document-site/sites/${siteId}/forms/${formId}`,
        getDoc: (siteId: string, formId: string, dataId: string) => `/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
        addDoc: (siteId: string, formId: string) => `/document-site/sites/${siteId}/forms/${formId}`,
        updateDoc: (siteId: string, formId: string, dataId: string) => `/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
        deleteDoc: (siteId: string, formId: string, dataId: string) => `/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
    },
};


export type Params = {
    ids?: string;
    limit?: string;
    next?: string;
    sort?: string;
    order?: string;
}