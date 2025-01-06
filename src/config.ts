export const BASE_URLS = {
    auth: "https://api-auth.tanqory.com/api/v1",
    product: "https://api-product.tanqory.com/api/v1",
    form: "https://api-form.tanqory.com/api/v1",
};

export const API_ENDPOINTS = {
    auth: {
        getProfile: "/auth/user/profile",
        login: "/auth/login",
        logout: "/auth/logout",
    },
    product: {
        getProducts: (siteId: string) => `/api/v1/product-management/${siteId}/products`,
        getProduct: (siteId: string, productId: string) => `/api/v1/product-management/${siteId}/products/${productId}`,
        addProduct: (siteId: string) => `/api/v1/product-management/${siteId}/products`,
        updateProduct: (siteId: string, productId: string) => `/api/v1/product-management/${siteId}/products/${productId}`,
        removeProduct: (siteId: string, productId: string) => `/api/v1/product-management/${siteId}/products/${productId}`,
    },
    form: {
        getSchema: (formId: string) => `/api/v1/forms/renders/form/${formId}`,
        getDocs: (siteId: string, formId: string) => `/api/v1/document-site/sites/${siteId}/forms/${formId}`,
        getDoc: (siteId: string, formId: string, dataId: string) => `/api/v1/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
        addDoc: (siteId: string, formId: string) => `/api/v1/document-site/sites/${siteId}/forms/${formId}`,
        updateDoc: (siteId: string, formId: string, dataId: string) => `/api/v1/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
        deleteDoc: (siteId: string, formId: string, dataId: string) => `/api/v1/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
    },
};