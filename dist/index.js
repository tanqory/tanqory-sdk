"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TanqorySDK = void 0;
const auth_1 = require("./auth");
const product_1 = require("./product");
const form_1 = require("./form");
class TanqorySDK {
    constructor(jwtToken) {
        this.auth = new auth_1.TanqoryAuth(jwtToken);
        this.product = new product_1.TanqoryProduct(jwtToken);
        this.form = new form_1.TanqoryForm(jwtToken);
    }
}
exports.TanqorySDK = TanqorySDK;
exports.default = TanqorySDK;
