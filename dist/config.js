"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ENDPOINTS = exports.BASE_URLS = void 0;
exports.BASE_URLS = {
    auth: "https://api-auth.tanqory.com/api/v1",
    product: "https://api-products-staging.tanqory.com/api/v1",
    form: "https://api-form.tanqory.com/api/v1",
};
exports.API_ENDPOINTS = {
    auth: {
        getProfile: "/auth/user/profile",
        login: "/auth/login",
        logout: "/auth/logout",
    },
    product: {
        // Products
        getProducts: (siteId) => `/product-management/${siteId}/products`,
        getProduct: (siteId, productId) => `/product-management/${siteId}/products/${productId}`,
        addProduct: (siteId) => `/product-management/${siteId}/products`,
        updateProduct: (siteId, productId) => `/product-management/${siteId}/products/${productId}`,
        removeProduct: (siteId, productId) => `/product-management/${siteId}/products/${productId}`,
        // Collections
        getCollections: (siteId) => `/product-management/${siteId}/collections`,
        getCollection: (siteId, collectionId) => `/product-management/${siteId}/collections/${collectionId}`,
    },
    form: {
        getSchema: (formId) => `/forms/renders/form/${formId}`,
        getDocs: (siteId, formId) => `/document-site/sites/${siteId}/forms/${formId}`,
        getDoc: (siteId, formId, dataId) => `/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
        addDoc: (siteId, formId) => `/document-site/sites/${siteId}/forms/${formId}`,
        updateDoc: (siteId, formId, dataId) => `/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
        deleteDoc: (siteId, formId, dataId) => `/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
    },
};
