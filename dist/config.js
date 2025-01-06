"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ENDPOINTS = exports.BASE_URLS = void 0;
exports.BASE_URLS = {
    auth: "https://api-auth.tanqory.com/api/v1",
    product: "https://api-product.tanqory.com/api/v1",
    form: "https://api-form.tanqory.com/api/v1",
};
exports.API_ENDPOINTS = {
    auth: {
        getProfile: "/auth/user/profile",
        login: "/auth/login",
        logout: "/auth/logout",
    },
    product: {
        getProducts: (siteId) => `/api/v1/product-management/${siteId}/products`,
        getProduct: (siteId, productId) => `/api/v1/product-management/${siteId}/products/${productId}`,
        addProduct: (siteId) => `/api/v1/product-management/${siteId}/products`,
        updateProduct: (siteId, productId) => `/api/v1/product-management/${siteId}/products/${productId}`,
        removeProduct: (siteId, productId) => `/api/v1/product-management/${siteId}/products/${productId}`,
    },
    form: {
        getSchema: (formId) => `/api/v1/forms/renders/form/${formId}`,
        getDocs: (siteId, formId) => `/api/v1/document-site/sites/${siteId}/forms/${formId}`,
        getDoc: (siteId, formId, dataId) => `/api/v1/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
        addDoc: (siteId, formId) => `/api/v1/document-site/sites/${siteId}/forms/${formId}`,
        updateDoc: (siteId, formId, dataId) => `/api/v1/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
        deleteDoc: (siteId, formId, dataId) => `/api/v1/document-site/sites/${siteId}/forms/${formId}/document/${dataId}`,
    },
};
