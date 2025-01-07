"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TanqoryProduct = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
class TanqoryProduct {
    constructor(jwtToken) {
        this.client = axios_1.default.create({
            baseURL: config_1.BASE_URLS.product,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`,
            },
        });
    }
    getProducts(siteId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.get(config_1.API_ENDPOINTS.product.getProducts(siteId), { params });
                return response.data;
            }
            catch (error) {
                console.error("Error fetching products:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    getProduct(siteId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.get(config_1.API_ENDPOINTS.product.getProduct(siteId, productId));
                return response.data;
            }
            catch (error) {
                console.error("Error fetching products:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    addProduct(siteId, product) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.post(config_1.API_ENDPOINTS.product.addProduct(siteId), product);
                return response.data;
            }
            catch (error) {
                console.error("Error fetching products:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    updateProduct(siteId, productId, product) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.put(config_1.API_ENDPOINTS.product.updateProduct(siteId, productId), product);
                return response.data;
            }
            catch (error) {
                console.error("Error fetching products:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    removeProduct(siteId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.delete(config_1.API_ENDPOINTS.product.removeProduct(siteId, productId));
                return response.data;
            }
            catch (error) {
                console.error("Error fetching products:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    getCollections(siteId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.get(config_1.API_ENDPOINTS.product.getCollections(siteId), { params });
                return response.data;
            }
            catch (error) {
                console.error("Error fetching products:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    getCollection(siteId, collectionId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.get(config_1.API_ENDPOINTS.product.getCollection(siteId, collectionId));
                return response.data;
            }
            catch (error) {
                console.error("Error fetching products:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
}
exports.TanqoryProduct = TanqoryProduct;
