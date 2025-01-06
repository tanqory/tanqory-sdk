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
exports.TanqoryForm = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
class TanqoryForm {
    constructor(jwtToken) {
        this.client = axios_1.default.create({
            baseURL: config_1.BASE_URLS.form,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`,
            },
        });
    }
    getSchema(formId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.get(config_1.API_ENDPOINTS.form.getSchema(formId));
                return response.data;
            }
            catch (error) {
                console.error("Error submitting form:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    getDocs(siteId, formId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.get(config_1.API_ENDPOINTS.form.getDocs(siteId, formId), { params });
                return response.data;
            }
            catch (error) {
                console.error("Error submitting form:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    getDoc(siteId, formId, dataId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.get(config_1.API_ENDPOINTS.form.getDoc(siteId, formId, dataId));
                return response.data;
            }
            catch (error) {
                console.error("Error submitting form:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    addDoc(siteId, formId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.post(config_1.API_ENDPOINTS.form.addDoc(siteId, formId), data);
                return response.data;
            }
            catch (error) {
                console.error("Error submitting form:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    updateDoc(siteId, formId, dataId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.put(config_1.API_ENDPOINTS.form.updateDoc(siteId, formId, dataId), data);
                return response.data;
            }
            catch (error) {
                console.error("Error submitting form:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
    deleteDoc(siteId, formId, dataId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield this.client.delete(config_1.API_ENDPOINTS.form.deleteDoc(siteId, formId, dataId));
                return response.data;
            }
            catch (error) {
                console.error("Error submitting form:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw error;
            }
        });
    }
}
exports.TanqoryForm = TanqoryForm;
